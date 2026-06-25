// iOS Safari (and any WebKit browser on iOS) does not support the Fullscreen
// API on iframe elements — only on native <video> elements. Custom fullscreen
// buttons targeting an iframe are non-functional there.
export function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isAppleTouch = /iPad|iPhone|iPod/.test(ua);
  // iPadOS 13+ reports as "MacIntel" with touch support enabled
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return isAppleTouch || isIPadOS;
}
