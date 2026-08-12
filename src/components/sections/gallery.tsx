"use client";

import { ThreeDMarquee } from "@/components/lightswind/3d-marquee";
import { galleryImages } from "@/lib/content";

export function Gallery() {
  const images = galleryImages.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section id="atmosphaere" className="relative bg-background py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-500/80">
          Atmosphäre
        </span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Ein Raum, der flüstert statt schreit
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
          Samtvorhänge, warmes Kerzenlicht und Ecken für leise Gespräche –
          ein Blick hinter die Tür.
        </p>
      </div>

      <div className="relative mt-14">
        <ThreeDMarquee images={images} cols={4} className="!bg-background" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
