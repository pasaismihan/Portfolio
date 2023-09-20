import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        <p className="textbackground">Hi I'm Pasa ISMIHAN</p>
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I'm working on Full Stack
      </motion.h3>
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        <div className="glass">
          I&apos;m a Software developer with expertise in creating top-notch
          digital experiences. My current focus is on developing products that
          are accessible and centered around user needs, as part of the team
          at&nbsp;
          <Link
            href="https://https://workintech.com.tr/.com"
            target="_blank"
            className="link"
          >
            Workintech.
          </Link>
        </div>
      </motion.div>
      {/* <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my resume"
          link="http://localhost:3000/Pasaismihan_resume.pdf"
        />
      </motion.div> */}
    </div>
  );
}

export default Hero;
