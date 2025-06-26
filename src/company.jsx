// src/company.jsx
import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero_company';
import SeenOn from './components/SeenOn';
import TeamPhotoSection from './components/team_photo';
import SuccessStories from './components/SuccessStories';
import ProfessionalPhotoSteps from './components/ProfessionalPhotoSteps';
import ContactForm from './components/contact';
import FAQ from './components/faq';
import Footer from './components/footer';

export default function Company() {
  return (
   <div>
    <Header />
    <Hero />
    <SeenOn />
    <TeamPhotoSection />
    <SuccessStories />
    <ProfessionalPhotoSteps />
    <ContactForm/>
    <FAQ />
    <Footer />
   </div>
  );
}
