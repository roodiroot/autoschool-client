import "./globals.css";
import type { Metadata } from "next";
import { comforta } from "@/fonts";
import Footer from "@/components/footer/footer";
import "./globals.css";
import Container from "@/components/container";
import Matryoshka from "@/components/matryoshka";
import AbsoluteComponents from "@/components/absolut-components/absolute-components";
import Header from "@/components/header/header";

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
    <html lang="ru">
      <body
        className={`${comforta.className} relative w-full h-full overflow-x-hidden
    before:pointer-events-none before:absolute before:-z-0 before:rounded-full before:bottom-[0%] before:right-[-20%]  before:bg-mgreen/10 before:w-[400px]  before:h-[400px] md:before:right-[0%] md:before:w-[512px] md:before:h-[512px]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Container>
          <div className="flex justify-between items-center">
            <div className="text-sm">
              © АНПОО «Автошкола Плюс», {new Date().getFullYear()} <br />
              ИНН1324002715
              <br />
              ОГРН1181326004969
            </div>
            <Matryoshka />
          </div>
        </Container>
        <AbsoluteComponents />
      </body>
    </html>
  );
}
