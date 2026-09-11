import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_API_BASE = 'https://api.hubapi.com/crm/v3/objects/contacts';

interface ContactPayload {
  name: string;
  council: string;
  department: string;
  email: string;
  phone?: string;
}

function splitName(fullName: string) {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(' ');
  if (spaceIndex === -1) return { firstname: trimmed, lastname: '' };
  return {
    firstname: trimmed.slice(0, spaceIndex),
    lastname: trimmed.slice(spaceIndex + 1),
  };
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

  const { name, council, department, email, phone } = body;
  if (!name?.trim() || !council?.trim() || !department?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const { firstname, lastname } = splitName(name);
  const properties = {
    firstname,
    lastname,
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
