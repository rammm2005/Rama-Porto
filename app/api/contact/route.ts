import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { contactSchema } from "@/model/contact";

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;
const ipRequestLogs = new Map<string, number[]>();

function getClientIP(req: NextRequest): string {
    return (
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("cf-connecting-ip") ||
        req.headers.get("x-real-ip") ||
        "unknown"
    );
}

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const requests = ipRequestLogs.get(ip) || [];

    const recentRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

    recentRequests.push(now);
    ipRequestLogs.set(ip, recentRequests);

    return recentRequests.length > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(req: NextRequest) {
    const ip = getClientIP(req);

    if (isRateLimited(ip)) {
        return NextResponse.json(
            { success: false, errors: ["Terlalu banyak permintaan. Silakan coba lagi nanti."] },
            { status: 429 }
        );
    }

    try {
        const body = await req.json();
        const validation = contactSchema.safeParse(body);

        if (!validation.success) {
            const errors = validation.error.issues.map((issue) => issue.message);
            return NextResponse.json({ success: false, errors }, { status: 400 });
        }

        const { name, email, message } = validation.data;

        const nodemailer = await import("nodemailer");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Message successfully sending." });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json(
            { success: false, errors: ["An error occurred while sending the message."] },
            { status: 500 }
        );
    }
}
