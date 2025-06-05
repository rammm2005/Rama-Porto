import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendContactMail({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New message from ${name}`,
        text: message,
        html: `
      <h3>New message from portfolio site</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p style="white-space:pre-line;"><b>Message:</b><br/>${message}</p>
    `,
    });

    return info;
}
