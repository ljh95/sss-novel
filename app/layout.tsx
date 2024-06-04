import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProviders from "./hooks/useReactQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "내가 발견한 SSS급 소설",
  description: "세상의 끝에서 전설급 소설을 발견했다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
