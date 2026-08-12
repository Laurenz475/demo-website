export const bar = {
  name: "Velvet Room",
  address: "Gonzagagasse 12, 1010 Wien",
  hours: "Mi – Sa, 19:00 – 02:00",
  hoursClosed: "So – Di geschlossen",
  instagram: "@velvetroom.vienna",
  instagramUrl: "https://instagram.com/velvetroom.vienna",
  dresscode: "Smart Casual",
};

export const openingHours = [
  { day: "Montag", hours: "geschlossen" },
  { day: "Dienstag", hours: "geschlossen" },
  { day: "Mittwoch", hours: "19:00 – 02:00" },
  { day: "Donnerstag", hours: "19:00 – 02:00" },
  { day: "Freitag", hours: "19:00 – 03:00" },
  { day: "Samstag", hours: "19:00 – 03:00" },
  { day: "Sonntag", hours: "geschlossen" },
];

export interface Cocktail {
  name: string;
  ingredients: string;
  description: string;
  image: string;
  glow: string;
}

export const cocktails: Cocktail[] = [
  {
    name: "Smoke & Mirrors",
    ingredients: "Mezcal · Aktivkohle-Sirup · Limette · Chili-Salz",
    description:
      "Rauchig, dunkel und ein bisschen gefährlich – serviert unter einer Cloche, die erst am Tisch geöffnet wird.",
    image:
      "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&w=1200&q=80",
    glow: "#7c2438",
  },
  {
    name: "Velvet Kiss",
    ingredients: "Gin · Hibiskus · Rosenwasser · Zitrone",
    description:
      "Floral, elegant, mit einem Hauch Rosa in der Aromatik – unser leisester, aber meistbestellter Drink.",
    image:
      "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?auto=format&fit=crop&w=1200&q=80",
    glow: "#7c5cbf",
  },
  {
    name: "Midnight Old Fashioned",
    ingredients: "Bourbon · Kakao-Bitter · Orangenzeste · Rohrzucker",
    description:
      "Der Klassiker, langsam gerührt und mit dunkler Schokoladennote – für die, die es geradlinig mögen.",
    image:
      "https://images.unsplash.com/photo-1470339128399-7ecf082f72ab?auto=format&fit=crop&w=1200&q=80",
    glow: "#c9a24b",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1709548145082-04d0cde481d4?auto=format&fit=crop&w=900&q=80",
    alt: "Dunkle Lounge-Ecke mit Samtsesseln",
  },
  {
    src: "https://images.unsplash.com/photo-1720694924759-2a2daaa98987?auto=format&fit=crop&w=900&q=80",
    alt: "Bartresen im warmen Licht",
  },
  {
    src: "https://images.unsplash.com/photo-1578911489158-334e5cd2a051?auto=format&fit=crop&w=900&q=80",
    alt: "Moody Bar-Interieur mit Neonlicht",
  },
  {
    src: "https://images.unsplash.com/photo-1739295194982-48c86939c1d8?auto=format&fit=crop&w=900&q=80",
    alt: "Getränkeregal mit Barflaschen",
  },
  {
    src: "https://images.unsplash.com/photo-1557955776-857434f1c951?auto=format&fit=crop&w=900&q=80",
    alt: "Dunkle Sitznische in der Bar",
  },
  {
    src: "https://images.unsplash.com/photo-1640902106532-47dd3a2e833e?auto=format&fit=crop&w=900&q=80",
    alt: "Barkeeper bei der Zubereitung eines Cocktails",
  },
  {
    src: "https://images.unsplash.com/photo-1730406929160-9c6e6f13e277?auto=format&fit=crop&w=900&q=80",
    alt: "Stimmungsvolles Detail der Bar-Beleuchtung",
  },
  {
    src: "https://images.unsplash.com/photo-1583367455075-9b4f4c6735bb?auto=format&fit=crop&w=900&q=80",
    alt: "Speakeasy-Atmosphäre am Abend",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1739799120521-c5f44a9335a3?auto=format&fit=crop&w=2000&q=80";

export const aboutImage =
  "https://images.unsplash.com/photo-1571168136613-46401b03904e?auto=format&fit=crop&w=1400&q=80";

export const eventsImage =
  "https://images.unsplash.com/photo-1550218585-5a4e6bc59ebb?auto=format&fit=crop&w=1800&q=80";
