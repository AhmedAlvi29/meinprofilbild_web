import React from "react";
import { Routes, Route } from "react-router-dom";
import Company from "./company";
import Example from "./exampls"

// All your original component imports
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import PackageBanner from "./components/PackageBanner";
import SeenOn from "./components/SeenOn";
import ProfessionalPhotoSteps from "./components/ProfessionalPhotoSteps";
import SuccessStories from "./components/SuccessStories";
import Price from "./components/price";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import "./index.css";
import "./App.css";

// Optional: Home component wrapping your homepage content
function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <PackageBanner />
      <SeenOn />
      <SuccessStories />
      <ProfessionalPhotoSteps />
      <Price />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/company" element={<Company />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
}

export default App;
