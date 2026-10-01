import Link from "next/link";
import { ArrowLeft, Signpost } from "lucide-react";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { russo } from "@/fonts";

export default function NotFound() {
  return (
    <Container className="pb-20 pt-44 sm:pb-28 sm:pt-52 lg:pt-60">
      <section className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-16">
        <div className="relative flex h-64 w-64 shrink-0 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-mgreen shadow-m2" />
          <div aria-hidden="true" className="absolute inset-5 rounded-full border-2 border-dashed border-mwhite/60 sm:inset-7" />
          <div className="relative flex flex-col items-center text-mwhite">
            <Signpost aria-hidden="true" className="mb-3 h-12 w-12 sm:h-16 sm:w-16" strokeWidth={1.5} />
            <span className={`${russo.className} text-7xl leading-none sm:text-8xl lg:text-9xl`}>404</span>
          </div>
        </div>

        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 text-sm font-bold text-mgreen sm:text-base">Кажется, мы свернули не туда</p>
          <h1 className={`${russo.className} mb-5 text-3xl leading-tight sm:text-4xl lg:text-5xl`}>
            Страница <span className="text-mgreen">не найдена</span>
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            Возможно, она была удалена или в адресе есть опечатка.
            Вернитесь на главную — там всё, что нужно для старта за рулём.
          </p>
          <Button asChild variant="mfull" className="gap-3 px-7 text-base hover:bg-mgreen/90 sm:text-lg">
            <Link href="/">
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
              На главную
            </Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
