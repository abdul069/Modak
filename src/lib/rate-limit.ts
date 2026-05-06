// Simple in-memory rate limiter. v1 acceptable for low traffic.
// NOTE: this resets on each deploy / cold start — by design.
const submissions = new Map<string, number>();
const WINDOW_MS = 30_000;

export function rateLimit(ipKey: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const last = submissions.get(ipKey) ?? 0;
  if (now - last < WINDOW_MS) {
    return { ok: false, retryAfter: WINDOW_MS - (now - last) };
  }
  submissions.set(ipKey, now);

  // Best-effort cleanup
  if (submissions.size > 5_000) {
    for (const [k, t] of submissions) {
      if (now - t > 5 * 60_000) submissions.delete(k);
    }
  }
  return { ok: true, retryAfter: 0 };
}
