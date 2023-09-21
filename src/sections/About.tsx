import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello, my name is Paşa. If I need to briefly talk about myself;
            During my university years, I enjoyed discussing the difficulties
            faced by a roommate who was a computer engineer in algorithm lessons
            together. After graduation, I started professional life as a civil
            engineer, but the pleasure I got from software was always in the
            back of my mind. While progressing in this field on my own, I
            successfully completed the 6-month Full Stack bootcamp training
            under the guidance of my mentor teachers in order to progress the
            process in the most efficient way. For the last 5 months, I have
            been developing Full Stack projects on .Net and React.Js. The
            project I am currently working on uses microservice architecture,
            and I feel that I am improving myself even more in every project.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">C#</li>
            <li className="about-grid-info-list-item">EF Core</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">.NET</li>
            <li className="about-grid-info-list-item">RabbitMQ</li>
            <li className="about-grid-info-list-item">MVC</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/pasa2.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
