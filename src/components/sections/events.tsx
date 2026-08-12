"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { eventsImage } from "@/lib/content";

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <Image
          src={eventsImage}
          alt="Nächtliche Bar-Atmosphäre mit Live-DJ"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center"
      >
        <span className="rounded-full border border-violet-400/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-violet-300">
          Freitag &amp; Samstag
        </span>
        <h2 className="font-display text-4xl md:text-5xl">
          Live-DJ-Sets am Wochenende
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
          An Freitagen und Samstagen übernehmen wechselnde DJs die Plattenteller
          des Hauses – tiefe Grooves, warme Bässe, nie lauter als ein
          Gespräch am Nebentisch. Der Raum bleibt intim: Einlass nach
          Verfügbarkeit, Reservierung dringend empfohlen.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm uppercase tracking-[0.15em] text-gold-300/90">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            DJ-Sets ab 22:00
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Reservierung empfohlen
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-bordeaux-400" />
            Smart Casual
          </span>
        </div>

        <a
          href="#kontakt"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3 text-sm uppercase tracking-[0.2em] text-background transition-colors hover:bg-gold-400"
        >
          Platz für das Wochenende sichern
        </a>
      </motion.div>
    </section>
  );
}
