import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Cocktails } from "@/components/sections/cocktails";
import { Gallery } from "@/components/sections/gallery";
import { Events } from "@/components/sections/events";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Cocktails />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
