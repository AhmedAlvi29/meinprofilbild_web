import React from "react"
import Hero from "./components/hero_example"
import { Header } from "./components/header";
import SeenOn from "./components/SeenOn";
import SuccessStories from "./components/examples"
import Footer from "./components/footer";
export default function Example() {
    return (
    <div>
        <Header />
        <Hero />
        <SeenOn />
        <SuccessStories />
        <SuccessStories />
        <Footer />
    </div>
    );
  }
  