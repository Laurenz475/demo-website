"use client";

import Image from "next/image";
import { TextParticleAnimation } from "@/components/lightswind/text-particle-animation";
import { heroImage } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Moody Interieur der Velvet Room Bar"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(124,36,56,0.35),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-violet-500/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-bordeaux-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[110px]" />

      <div className="relative z-10 grain flex flex-col items-center gap-6 px-6 text-center">
        <span className="animate-flicker text-xs uppercase tracking-[0.4em] text-gold-400/90">
          Klopf leise an
        </span>

        <h1 className="sr-only">Velvet Room</h1>
        <div className="w-full max-w-3xl">
          <TextParticleAnimation
            text="VELVET ROOM"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight={700}
            fontSize={92}
            resolution={3}
            pixelSize={2.2}
            hoverRadius={70}
            repelForce={18}
            theme="dark"
            padding={40}
            height={190}
          />
        </div>

        <p className="max-w-lg text-balance font-display text-xl italic text-foreground/80 md:text-2xl">
          Hinter einer unauffälligen Tür in der Gonzagagasse liegt Wiens
          diskreteste Cocktailbar.
        </p>

        <a
          href="#kontakt"
          className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-gold-500/70 px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold-300 transition-colors hover:text-background"
        >
          <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          Tisch reservieren
        </a>

        <div className="mt-10 flex flex-col items-center gap-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Mi – Sa · 19:00 – 02:00</span>
          <span>Gonzagagasse 12, 1010 Wien</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gold-500/70">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v16m0 0-6-6m6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
