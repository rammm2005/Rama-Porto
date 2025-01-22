import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
    message?: string;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `New Contact Message from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Your message has been sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
