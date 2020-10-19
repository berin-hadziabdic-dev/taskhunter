import React from "react";
import "./LandingPage.css";
import { LandingTriCards } from "./LandingTriCards";
import { LandingBanner } from "./LandingBanner";
import { DoubleCard } from "./DoubleCard";
import { Teams } from "./Teams";
import { Footer } from "../../Nav/Footer";

function LandingPage(props) {
  return (
    <section className="container-fluid mx-2">
      <LandingBanner />
      <LandingTriCards />
      <Teams />
      <DoubleCard />
      <Footer />
    </section>
  );
}

export { LandingPage };
