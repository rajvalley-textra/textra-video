import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_API_BASE = 'https://api.hubapi.com/crm/v3/objects/contacts';

interface ContactPayload {
  firstName: string;
  lastName: string;
  council: string;
  department: string;
  email: string;
  phone?: string;
}

async function notifySlack(payload: ContactPayload) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('[local-authorities-contact] SLACK_WEBHOOK_URL not set, skipping Slack alert');
    return;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text:
          `:dart: New Local Authorities lead: *${payload.firstName} ${payload.lastName}* ` +
          `(${payload.council}, ${payload.department}) — ${payload.email}` +
          (payload.phone ? ` — ${payload.phone}` : ''),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error(`[local-authorities-contact] Slack webhook returned ${res.status}: ${body}`);
    } else {
      console.log('[local-authorities-contact] Slack alert sent');
    }
  } catch (err) {
    // Slack alert is best-effort; never let it block the actual submission.
    console.error('[local-authorities-contact] Slack webhook fetch threw:', err);
  }
}

export async function POST(request: NextRequest) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: 'HubSpot is not configured on the server.' },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { firstName, lastName, council, department, email, phone } = body;
  if (!firstName?.trim() || !lastName?.trim() || !council?.trim() || !department?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const properties = {
    firstname: firstName,
    lastname: lastName,
    email,
    phone: phone || '',
    company: council,
    department,
  };

  const createRes = await fetch(HUBSPOT_API_BASE, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ properties }),
  });

  if (createRes.ok) {
    await notifySlack(body);
    return NextResponse.json({ ok: true });
  }

  const errorBody = await createRes.json().catch(() => null);

  // Contact already exists — update it instead of failing.
  if (createRes.status === 409) {
    const existingId: string | undefined = errorBody?.message?.match(/Existing ID:\s*(\d+)/)?.[1];
    if (existingId) {
      const updateRes = await fetch(`${HUBSPOT_API_BASE}/${existingId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ properties }),
      });

      if (updateRes.ok) {
        await notifySlack(body);
        return NextResponse.json({ ok: true });
      }

      const updateError = await updateRes.json().catch(() => null);
      return NextResponse.json(
        { error: updateError?.message || 'Failed to update existing contact.' },
        { status: updateRes.status }
      );
    }
  }

  return NextResponse.json(
    { error: errorBody?.message || 'Failed to submit to HubSpot.' },
    { status: createRes.status }
  );
}
