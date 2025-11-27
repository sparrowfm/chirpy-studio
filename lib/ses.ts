import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.AWS_ACCESS_KEY_ID ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  } : undefined,
});

const FROM_EMAIL = process.env.SES_FROM_EMAIL || 'info@chirpy.studio';
const FORWARD_TO = process.env.SES_FORWARD_TO || 'neel.ketkar@gmail.com';

interface SendEmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail({ to, subject, text, html }: SendEmailOptions): Promise<void> {
  const command = new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: text,
          Charset: 'UTF-8',
        },
        ...(html && {
          Html: {
            Data: html,
            Charset: 'UTF-8',
          },
        }),
      },
    },
  });

  await client.send(command);
}

export async function sendWelcomeEmail(subscriberEmail: string): Promise<void> {
  await sendEmail({
    to: subscriberEmail,
    subject: 'Welcome to Chirpy Studio',
    text: `Thanks for joining the Chirpy Studio waitlist!

We're building something special in the world of AI-powered narrative audio, and we're excited to have you along for the journey.

We'll be in touch when we have news to share.

- The Chirpy Studio Team

---
Chirpy Studio
https://chirpy.studio`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; background-color: #0B0E14; color: #E6EAF2; padding: 40px 20px;">
  <div style="max-width: 500px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 32px;">
      <span style="font-size: 24px; font-weight: bold;">
        <span style="color: #F97316;">CHIRPY</span>
        <span style="color: #D946EF;">STUDIO</span>
      </span>
    </div>
    <h1 style="font-size: 24px; margin-bottom: 16px;">Welcome!</h1>
    <p style="color: #A7B0C0; line-height: 1.6;">
      Thanks for joining the Chirpy Studio waitlist!
    </p>
    <p style="color: #A7B0C0; line-height: 1.6;">
      We're building something special in the world of AI-powered narrative audio, and we're excited to have you along for the journey.
    </p>
    <p style="color: #A7B0C0; line-height: 1.6;">
      We'll be in touch when we have news to share.
    </p>
    <p style="color: #A7B0C0; margin-top: 32px;">
      - The Chirpy Studio Team
    </p>
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #202635; text-align: center;">
      <a href="https://chirpy.studio" style="color: #F97316; text-decoration: none;">chirpy.studio</a>
    </div>
  </div>
</body>
</html>
    `,
  });
}

export async function sendSignupNotification(email: string): Promise<void> {
  await sendEmail({
    to: FORWARD_TO,
    subject: `[Chirpy Studio] New signup: ${email}`,
    text: `New waitlist signup on chirpy.studio:

Email: ${email}
Time: ${new Date().toISOString()}

---
Chirpy Studio Waitlist`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; padding: 20px;">
  <h2 style="color: #F97316;">New Waitlist Signup</h2>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p style="color: #666; font-size: 14px;">Time: ${new Date().toISOString()}</p>
</body>
</html>
    `,
  });
}

export async function sendContactNotification(
  name: string,
  email: string,
  message: string
): Promise<void> {
  await sendEmail({
    to: FORWARD_TO,
    subject: `[Chirpy Studio] Contact from ${name}`,
    text: `New contact form submission from chirpy.studio:

Name: ${name}
Email: ${email}

Message:
${message}

---
Reply directly to this email to respond to ${email}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; padding: 20px;">
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
    <p style="margin: 0; white-space: pre-wrap;">${message}</p>
  </div>
  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    Reply directly to this email to respond to the sender.
  </p>
</body>
</html>
    `,
  });

  // Also send confirmation to the submitter
  await sendEmail({
    to: email,
    subject: 'We received your message - Chirpy Studio',
    text: `Hi ${name},

Thanks for reaching out to Chirpy Studio! We've received your message and will get back to you soon.

Your message:
"${message}"

- The Chirpy Studio Team

---
Chirpy Studio
https://chirpy.studio`,
  });
}
