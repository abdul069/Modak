import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL ?? "info@modak.be";
const fromAddress =
  process.env.EMAIL_FROM ?? "Modak <noreply@modak.be>";

const resend = apiKey ? new Resend(apiKey) : null;

interface SendArgs {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendArgs) {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY not set — skipping send. Subject:",
      subject
    );
    return { skipped: true };
  }
  const result = await resend.emails.send({
    from: fromAddress,
    to,
    subject,
    html,
    replyTo,
  });
  if (result.error) {
    throw new Error(result.error.message);
  }
  return { id: result.data?.id };
}

export { contactEmail };
