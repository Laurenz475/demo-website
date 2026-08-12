"use client";

import { useEffect, useState } from "react";
import { bar } from "@/lib/content";

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#cocktails", label: "Cocktails" },
  { href: "#atmosphaere", label: "Atmosphäre" },
  { href: "#events", label: "Events" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/80 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.15em] text-gold-400"
        >
          VELVET ROOM
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden rounded-full border border-gold-500/60 px-5 py-2 text-sm uppercase tracking-[0.12em] text-gold-400 transition-all hover:border-gold-400 hover:bg-gold-500/10 md:inline-block"
        >
          Tisch reservieren
        </a>

        <button
          aria-label="Menü öffnen"
          className="text-gold-400 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl border border-border bg-card/95 p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.12em] text-foreground/80 hover:bg-white/5 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-gold-500/60 px-4 py-3 text-center text-sm uppercase tracking-[0.12em] text-gold-400"
          >
            Tisch reservieren
          </a>
        </div>
      )}
      <span className="sr-only">{bar.name}</span>
    </header>
  );
}
