# Velvet Room — Demo Website

Verspielte Demo-Website für "Velvet Room", eine fiktive Speakeasy-Cocktailbar in Wien.
Gebaut mit Next.js (App Router), Tailwind CSS v4 und ausgewählten Komponenten aus der
[Lightswind UI](https://lightswind.com/) Bibliothek (Copy-Paste-Architektur, keine Runtime-Dependency).

Dient als Vorlage/Demo für potenzielle Kunden.

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3002](http://localhost:3002) (Port ist in `dev.cmd` fix gesetzt, um Kollisionen mit
anderen lokalen Projekten zu vermeiden).

## Struktur

- `src/app` — Next.js App-Router-Seiten, Layout, globale Styles
- `src/components/sections` — die einzelnen Seitenabschnitte (Hero, Cocktails, Galerie, Events, Kontakt …)
- `src/components/layout` — Navbar & Footer
- `src/components/lightswind` — ausgewählte, lokal kopierte Lightswind-Komponenten (Glowing Cards,
  3D-Marquee, Text-Particle-Animation, Form-Elemente)
- `src/lib/content.ts` — sämtliche Inhalte/Texte/Bild-URLs der fiktiven Bar an einem Ort

## Hinweise

- Alle Bilder sind thematische Unsplash-Platzhalter, keine echten Markenfotos.
- Das Reservierungsformular ist reine Frontend-Demo ohne Backend-Anbindung.
