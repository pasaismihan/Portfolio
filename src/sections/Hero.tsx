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
        I'm a Full Stack Developer
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
          For the past year, I have actively contributed to group
          collaborations, addressing project challenges using Agile methodology
          both individually and during the bootcamp trainings I've attended. My
          objective is to further enhance both my personal development and
          contribute to the success of the company by leveraging my skills and
          education within a professional environment.
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
