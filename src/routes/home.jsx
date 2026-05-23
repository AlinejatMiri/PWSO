import React from "react";
import Hero from "../components/Hero";
import About from "../components/about";
import Project from "../components/project";
import Donors from "../components/donors";
import Motivation from "../components/movtivation";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 w-full flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Project />
      <Donors />
      <Motivation />
    </div>
  );
}

export default Home;
