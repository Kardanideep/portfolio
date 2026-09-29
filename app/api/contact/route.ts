import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
  website?: string;
  phone?: string;
};

/* ── Brand constants — adjust to your site ─────────── */
const BRAND_NAME = "Your Name";
const BRAND_COLOR = "#2563EB";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const project = body.project?.trim();
    const message = body.message?.trim();
    const website = body.website?.trim();
    const phone = body.phone?.trim();

    /* ── Honeypot spam protection ──────────────────── */
    if (website) {
      return NextResponse.json(
        { message: "Message rejected." },
        { status: 400 },
      );
    }

    /* ── Validation ────────────────────────────────── */
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    /* ── Env check ─────────────────────────────────── */
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const port = Number(process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /* ── Send email to you (site owner) ────────────── */
    const ownerMail = {
      from: `"${BRAND_NAME} — Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `New portfolio enquiry`,
        `───────────────────────`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "Not provided"}`,
        `Project: ${project || "Not specified"}`,
        ``,
        `Message:`,
        `───────────────────────`,
        message,
        ``,
        `───────────────────────`,
        `Reply directly to this email to respond to ${name}.`,
      ].join("\n"),
      html: buildOwnerEmail({ name, email, phone, project, message }),
    };

    await transporter.sendMail(ownerMail);

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Unable to send message." },
      { status: 500 },
    );
  }
}

/* ══════════════════════════════════════════════════════
   OWNER EMAIL TEMPLATE
   ══════════════════════════════════════════════════════ */

function buildOwnerEmail({
  name,
  email,
  phone,
  project,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  project?: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0F1117;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 32px;">
              <p style="margin:0;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.75);font-weight:600;">
                New Enquiry
              </p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;color:#ffffff;line-height:1.3;">
                ${escapeHtml(name)} just reached out
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                    <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;font-weight:600;">Name</p>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0F1117;">${escapeHtml(name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                    <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;font-weight:600;">Email</p>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0F1117;">
                      <a href="mailto:${escapeHtml(email)}" style="color:${BRAND_COLOR};text-decoration:none;">${escapeHtml(email)}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                    <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;font-weight:600;">Phone</p>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0F1117;">${escapeHtml(phone || "Not provided")}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                    <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;font-weight:600;">Project</p>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0F1117;">${escapeHtml(project || "Not specified")}</p>
                  </td>
                </tr>
              </table>

              <div style="margin-top:24px;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;font-weight:600;">Message</p>
                <div style="background:#f8f9fb;border-left:3px solid ${BRAND_COLOR};border-radius:8px;padding:16px 18px;">
                  <p style="margin:0;font-size:15px;line-height:1.6;color:#1f2937;white-space:pre-wrap;">${escapeHtml(message)}</p>
                </div>
              </div>

              <!-- Reply CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${escapeHtml(email)}?subject=Re: Your enquiry"
                   style="display:inline-block;background:${BRAND_COLOR};color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:999px;text-decoration:none;">
                  Reply to ${escapeHtml(name.split(" ")[0])} →
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 32px;background:#f8f9fb;border-top:1px solid #eef0f3;">
              <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                Received ${new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/* ── Minimal HTML escape for user-supplied strings ─── */
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}