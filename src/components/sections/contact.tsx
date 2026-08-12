import { bar, openingHours } from "@/lib/content";
import { ReservationForm } from "./reservation-form";

export function Contact() {
  return (
    <section id="kontakt" className="relative bg-[#0d0708] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500/80">
            Reservierung
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Sichere dir deinen Platz
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            Der Velvet Room ist klein und diskret gehalten – eine
            Reservierung ist keine Pflicht, aber sehr empfohlen.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ReservationForm />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80">
                Adresse
              </p>
              <p className="mt-2 font-display text-xl text-foreground">
                {bar.name}
              </p>
              <p className="text-sm text-foreground/70">{bar.address}</p>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-500/80">
                Öffnungszeiten
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {openingHours.map((o) => (
                  <li key={o.day} className="flex justify-between gap-6">
                    <span className="text-muted-foreground">{o.day}</span>
                    <span
                      className={
                        o.hours === "geschlossen"
                          ? "text-muted-foreground/60"
                          : "text-foreground/85"
                      }
                    >
                      {o.hours}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-500/80">
                Dresscode
              </p>
              <p className="mt-2 text-sm text-foreground/85">{bar.dresscode}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Standort Velvet Room"
                src="https://www.google.com/maps?q=Gonzagagasse+12,+1010+Wien&output=embed"
                className="h-56 w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
