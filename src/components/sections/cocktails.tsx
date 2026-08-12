"use client";

import Image from "next/image";
import { GlowingCard, GlowingCards } from "@/components/lightswind/glowing-cards";
import { cocktails } from "@/lib/content";

export function Cocktails() {
  return (
    <section id="cocktails" className="relative bg-[#0d0708] py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-500/80">
          Signature Cocktails
        </span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Die Karte des Hauses
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
          Drei Drinks, die den Velvet Room definieren – jeder mit eigener
          Handschrift, jeder ein kleines Ritual.
        </p>
      </div>

      <div className="mt-16 px-6">
        <GlowingCards
          enableGlow
          glowRadius={22}
          gap="2rem"
          maxWidth="72rem"
          padding="0"
          borderRadius="1.25rem"
          className="mx-auto"
        >
          {cocktails.map((cocktail) => (
            <GlowingCard
              key={cocktail.name}
              glowColor={cocktail.glow}
              className="group !min-w-[16rem] flex-1 overflow-hidden !p-0"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 24vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0708] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-gold-300">
                  {cocktail.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {cocktail.ingredients}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                  {cocktail.description}
                </p>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}
