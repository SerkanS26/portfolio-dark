import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-mainDark">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
