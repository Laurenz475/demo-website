import { bar, openingHours } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#070404] px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.15em] text-gold-400">
            VELVET ROOM
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Eine verborgene Adresse für alle, die das Besondere hinter der
            unauffälligen Tür suchen.
          </p>
          <a
            href={bar.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-gold-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
            </svg>
            {bar.instagram}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80">
            Adresse
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            {bar.name}
            <br />
            {bar.address}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-500/80">
            Dresscode
          </p>
          <p className="mt-2 text-sm text-foreground/80">{bar.dresscode}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80">
            Öffnungszeiten
          </p>
          <ul className="mt-3 space-y-1 text-sm text-foreground/80">
            {openingHours.map((o) => (
              <li key={o.day} className="flex justify-between gap-6">
                <span className="text-muted-foreground">{o.day}</span>
                <span>{o.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>
          Velvet Room ist ein fiktiver Demo-Kunde – erstellt zu
          Präsentationszwecken. Alle Bilder dienen als thematische Platzhalter.
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Velvet Room, Wien.</p>
      </div>
    </footer>
  );
}
