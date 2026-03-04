import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { Resend } = await import("resend");
    const data = await request.json();
    const { email, subject, message } = data;

    if (!process.env.RESEND_API_KEY) {
      console.log("RESEND_API_KEY not set - email would be sent to: your@email.com");
      return NextResponse.json({ success: true, mock: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "your@email.com",
      subject: subject,
      reply_to: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
