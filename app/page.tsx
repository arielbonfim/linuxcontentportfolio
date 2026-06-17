import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyItMatters from '@/components/WhyItMatters';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Values from '@/components/Values';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyItMatters />
        <About />
        <Services />
        <Portfolio />
        <Values />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
