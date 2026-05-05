import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return Response.json({ error: "All fields required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sukriti.dubey31@gmail.com",
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("/api/contact error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
