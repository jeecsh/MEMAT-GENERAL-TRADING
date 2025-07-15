// /app/api/send-email/route.ts (Next.js 13+)
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  try {
    await transporter.sendMail({
      from: '"MEMAT Trading Contact Form" <noreply@memat-trading.com>',
      replyTo: `"${name}" <${email}>`,
      to: "memattrading@gmail.com",
      subject: `New Message from ${name}`,
      html: `<p>You have received a new message from your website contact form.</p>
             <hr>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>
             <hr>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email Error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
