/**
 * Spam blacklist
 * ===============
 * Emails and domains we block at the form submission endpoint
 * (app/api/business-enquiry/route.ts). Submissions matching any
 * entry here are dropped silently before being forwarded to GHL —
 * so the bot doesn't pollute your CRM and you don't burn GHL
 * webhook quota on garbage.
 *
 * To add a new entry: append to the relevant array and push.
 * No code changes elsewhere are required.
 *
 * The "silent drop" approach is intentional — we return HTTP 200 OK
 * to the bot so it thinks the submission worked and stops retrying.
 * If we returned an error, well-engineered bots would just retry
 * from a different IP / address.
 */

/**
 * Email domains we always reject.
 * Match is case-insensitive and exact (e.g. "mail.ru" blocks
 * anything@mail.ru, but not anything@something.mail.ru).
 */
export const blockedDomains: string[] = [
  // Russian free-mail providers — heavy bot / scam volume
  'mail.ru',
  'bk.ru',
  'inbox.ru',
  'list.ru',
  'yandex.ru',

  // Disposable / throwaway inbox providers
  'yopmail.com',
  'mailinator.com',
];

/**
 * Specific full email addresses we always reject.
 * Use this when domain blocking is too broad (e.g. you want to block
 * one bad actor at gmail.com without blocking all gmail.com users).
 * Case-insensitive exact match.
 */
export const blockedEmails: string[] = [
  // Add full addresses here as needed, e.g.:
  // 'bad.actor@gmail.com',
];

/**
 * Returns true when the submitted email matches any blacklist entry.
 * Used by the form endpoint to short-circuit before forwarding to GHL.
 */
export function isBlockedEmail(email: string | undefined): boolean {
  if (!email || typeof email !== 'string') return false;
  const lower = email.trim().toLowerCase();
  if (blockedEmails.includes(lower)) return true;
  const at = lower.lastIndexOf('@');
  if (at < 0) return false;
  const domain = lower.slice(at + 1);
  return blockedDomains.includes(domain);
}
