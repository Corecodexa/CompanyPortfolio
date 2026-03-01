import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutTeam from "../components/about/AboutTeam";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;
