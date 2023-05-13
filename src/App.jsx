import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-darkGreen text-lightGreen px-4 md:pb-20 md:px-20 mx-auto">
      <Header />
      <Hero />
      <Story />
      <Services />
      <Roadmap />
      <Faq />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default App;
