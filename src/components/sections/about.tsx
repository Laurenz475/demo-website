"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShinyText } from "@/components/lightswind/shiny-text";
import { aboutImage } from "@/lib/content";

export function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-background py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-bordeaux-600/20 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500/80">
            Das Konzept
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Keine Türschilder.
            <br />
            <ShinyText
              size="4xl"
              weight="semibold"
              speed={4}
              baseColor="hsl(38 55% 70% / 0.35)"
              shineColor="#e7cd8c"
              className="font-display italic"
            >
              Nur die Richtigen finden hinein.
            </ShinyText>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/75">
            Der Velvet Room verbirgt sich hinter einer unscheinbaren Tür in
            der Wiener Innenstadt – kein Schild, kein Neonlicht, nur ein
            leises Klopfen. Drinnen erwartet dich ein samtdunkler Raum:
            tiefe Ledersessel, flackernde Kerzen, Jazz aus verborgenen
            Lautsprechern und Barkeeper, die ihr Handwerk wie eine Kunstform
            behandeln.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Seit der Prohibition hat sich die Idee der Speakeasy-Bar kaum
            verändert: Diskretion, Handwerk und ein Gefühl von Zugehörigkeit
            für die, die den Weg hinein gefunden haben.
          </p>

          <div className="mt-8 flex gap-10">
            <div>
              <p className="font-display text-3xl text-gold-400">1</p>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                unauffällige Tür
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-400">40+</p>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Cocktails auf der Karte
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-400">02:00</p>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                bis in die Nacht
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
        >
          <Image
            src={aboutImage}
            alt="Blick in den samtdunklen Innenraum des Velvet Room"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold-500/10" />
        </motion.div>
      </div>
    </section>
  );
}
