import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Expertise } from './components/Expertise';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-full w-full bg-paper font-sans text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <Profile />
        <Experience />
        <Work />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>);

}