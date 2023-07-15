import Head from "next/head";

import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Pasa ISMIHAN</title>
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>

      <>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </>
    </div>
  );
}

export default Index;
