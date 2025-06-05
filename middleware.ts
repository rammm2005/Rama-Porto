import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigin =
    process.env.NODE_ENV === "production"
        ? (process.env.DOMAIN as string)
        : "http://localhost:3000";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith('/api')) {
        const origin = request.headers.get('origin');
        const referer = request.headers.get('referer');

        if (origin !== allowedOrigin && (referer === null || !referer.startsWith(allowedOrigin))) {
            return new NextResponse('Access Denied', { status: 403 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};
