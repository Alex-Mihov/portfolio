import Header from "../components/Header/Header";

import Hero from "../components/Main/Hero";
import AboutMe from "../components/Main/AboutMe";
import Skills from "../components/Main/Skills";
import Projects from "../components/Main/Projects";
import Contacts from "../components/Main/Contacts";

import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
