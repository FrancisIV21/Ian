import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // or your domain if verified
      to: 'villacicafrancisian@gmail.com', // replace with your email
      subject: `New message from ${name}`,
      reply_to: email,
      text: `
        You got a new message from your portfolio contact form.

        Name: ${name}
        Email: ${email}
        Message: 
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
