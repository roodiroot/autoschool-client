import "./globals.css";
import type { Metadata } from "next";
import { comforta } from "@/fonts";

export const metadata: Metadata = {
  title: "Автошкола плюс",
  description: "Пожалуй лучшая автошкола в Рузаевке",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={comforta.className}>{children}</body>
    </html>
  );
}
