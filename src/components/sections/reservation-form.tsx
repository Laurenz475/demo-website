"use client";

import { useState } from "react";
import { Input } from "@/components/lightswind/input";
import { Textarea } from "@/components/lightswind/textarea";
import { Label } from "@/components/lightswind/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/lightswind/select";

const times = ["19:00", "20:00", "21:00", "22:00", "23:00"];
const guestCounts = ["2 Personen", "3 Personen", "4 Personen", "5 Personen", "6+ Personen"];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold-500/30 bg-card p-8 text-center">
        <p className="font-display text-2xl text-gold-300">
          Danke für deine Anfrage.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">
          Dies ist eine Demo-Website ohne aktive Reservierungsfunktion – in
          einer echten Umsetzung würde jetzt eine Bestätigung per E-Mail
          folgen.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-gold-500/50 px-6 py-2 text-sm uppercase tracking-[0.12em] text-gold-300 transition-colors hover:bg-gold-500/10"
        >
          Neue Anfrage
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-foreground/80">
            Name
          </Label>
          <Input id="name" name="name" required placeholder="Dein Name" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground/80">
            E-Mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="du@beispiel.at"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="date" className="text-foreground/80">
            Datum
          </Label>
          <Input id="date" name="date" type="date" required className="mt-2" />
        </div>
        <div>
          <Label className="text-foreground/80">Uhrzeit</Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="mt-2 border-input bg-background text-foreground">
              <SelectValue placeholder="Uhrzeit wählen" />
            </SelectTrigger>
            <SelectContent className="border-border bg-popover text-popover-foreground">
              {times.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label className="text-foreground/80">Personenanzahl</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="mt-2 border-input bg-background text-foreground">
              <SelectValue placeholder="Anzahl wählen" />
            </SelectTrigger>
            <SelectContent className="border-border bg-popover text-popover-foreground">
              {guestCounts.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="notes" className="text-foreground/80">
            Anmerkungen
          </Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Anlass, Allergien, Wünsche …"
            className="mt-2"
          />
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Dresscode: Smart Casual. Reservierungen sind bis 30 Minuten vor
        Ankunft gültig.
      </p>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gold-500 py-3 text-sm uppercase tracking-[0.2em] text-background transition-colors hover:bg-gold-400"
      >
        Anfrage senden
      </button>
    </form>
  );
}
