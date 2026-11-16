import Nav from './components/Nav';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import About from './components/About';
import Lessons from './components/Lessons';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credentials />
        <About />
        <Lessons />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
