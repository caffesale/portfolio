import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
    title: "김동규의 포트폴리오",
    description: "포트폴리오 사이트입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={notoSansKr.className}>
            <body className="">{children}</body>
        </html>
    );
}
