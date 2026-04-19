'use client';
import Nav from '@/components/Nav';
import Drawer from '@/components/Drawer';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Sobre from '@/components/Sobre';
import Styles from '@/components/Styles';
import Portfolio from '@/components/Portfolio';
import QuoteBand from '@/components/QuoteBand';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Studio from '@/components/Studio';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Fab from '@/components/Fab';
import TweaksPanel from '@/components/TweaksPanel';
import { useReveal } from '@/hooks/useReveal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  useReveal();
  useSmoothScroll();
  return (
    <>
      <Nav />
      <Drawer />
      <Hero />
      <Marquee />
      <Sobre />
      <Styles />
      <Portfolio />
      <QuoteBand />
      <Process />
      <Testimonials />
      <Faq />
      <Studio />
      <Cta />
      <Footer />
      <Fab />
      <TweaksPanel />
    </>
  );
}
