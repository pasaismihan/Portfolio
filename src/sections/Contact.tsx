import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
function Contact() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/pasaismihan",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/pasaismihan/",
    },
  ];
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button
          link="mailto:pasaismihan0@gmail.com"
          text="pasaismihan0@gmail.com"
        />
      </div>
      <div>
        <ul className="social-icons-list">
          {socialLinks.map(({ name, icon, link }) => (
            <li key={name} title={name} className="social-icons-list-item">
              <Link
                href={link}
                className="social-icons-list-item-link"
                target="_blank"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Contact;

<footer></footer>;
