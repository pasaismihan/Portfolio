import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "WORKINTECH",
      role: "Full Stack Developer",
      start: "January 2023",
      end: "Present",
      shortDescription: [
        " I finished among the top 10 students at Workintech educational institution, outperforming 1200 candidates, by successfully completing 45 frontend and 22 backend projects. Throughout my software journey, I diligently determined, built, and tested project requirements, adhering to the Agile development model. I effectively resolved issues encountered during project development and actively contributed to group management and collaboration. Looking ahead, my ambition is to leverage my project development skills and the team training I have received to make a meaningful impact in a professional setting. By doing so, I aim to continuously enhance my own abilities while driving growth for the company.",
      ],
    },

    {
      name: "MCA Eng.",
      role: "Civil Static Design Engineer",
      start: "November 2018",
      end: "November 2022",
      shortDescription: [
        "Supervised construction sites and managed the construction of villa-type structures in Kas/Antalya.",
        "Static loading and calculations of hangar type steel construction projects with sap2000 program",
        "Creation and follow-up of reinforced concrete projects for 6 silo warehouses constructed in Nigeria",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <div className="glass">
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
