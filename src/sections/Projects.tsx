import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/carauction.png",
      projectName: "Car Auction Microservice App",

      projectDescription:
        "this full stack website is an application that is made using microservice architecture, with SignalR, it is an application with features such as filtering and sorting, selling cars with auction via chat instantly, and identity system.",
      projectTech: [
        "Next.js",
        ".NET",
        "Microservice Architecture",
        "RabbitMQ",
        "SignalR",
        "Duende",
        "PostgreSQL",
        "Mongo DB",
        "Docker",
      ],
      projectExternalLinks: {
        github: "https://github.com/pasaismihan/CarStoreApp_Microservices",
        externalLink: "",
      },
    },
    {
      image: "/resumemanagement.png",
      projectName: "Resume Management Website",
      projectDescription:
        "The aim of this website is to create a resume from scratch and download and use it as a pdf. The frontend of this full stack project with its convenient frontend and day/night option was made with typscript and react.js, and the backend was made with ASP.NET core.",
      projectTech: [
        "React.js",
        "TypeScript",
        "ASP.NET Core",
        "Entity Framework",
        "MS SQL Server",
        "Material UI",
      ],
      projectExternalLinks: {
        github: "https://github.com/pasaismihan/ResumeManagement",
        externalLink: "",
      },
    },
    {
      image: "/crm.png",
      projectName: "CRM Bank Credit Interface Management",

      projectDescription:
        "In this project, it is aimed to transmit the incoming data to the Pipedrive API by managing the incoming data in the interface through the API received according to the form information that customers fill out from the Typeform application.",
      projectTech: [
        "React.js",
        "C#",
        ".NET Core",
        "EF Core",
        "MS SQL Server",
        "MUI Dashboard",
      ],
      projectExternalLinks: {
        github: "https://github.com/Workintech-Graduate-Projects",
        externalLink: "",
      },
    },
    {
      image: "/pizza.png",
      projectName: "Pizza Order Website",

      projectDescription:
        "There are stages such as dough specifications, pizza content, pricing on the pizza ordering site. For these selections, the CIP validation was used. Cypress library was used in the testing phase.",
      projectTech: ["React.js", "Tailwind CSS", "HTML", "Cypress", "Bootstrap"],
      projectExternalLinks: {
        github: "https://github.com/pasaismihan/fsweb-s7-challenge-pizza",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="overlay-border"></div>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
