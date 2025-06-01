import virtualImg from "./images/virtual.png";
import bloodImg from "./images/blood.png";
import propImg from "./images/property.png"
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Carscrack",
      description:
        "A B2B and B2C platform for buying, selling, and trading cars. Users can purchase vehicles from trusted dealers or trade their own cars. Built with Django REST Framework, it features comprehensive car listings, user management, and transaction processing.",
      tags: ["Django", "DRF", "SQL", "Channels", "Redis", "Celery", "Firebase", "GA4", "B2B", "B2C", "Automotive"],
      imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/be857c91-8429-4f76-a1ac-3229b5c9435d/b1ddac223cbf258d8160b0fafa6b85f9.png", // Restored original Carscrack image
      github: "https://github.com/Mahdirizvi114",
      demo: "https://carscrack.com",
    },
    {
      title: "Virtual Health Consult",
      description:
        "Virtual Health Consult is an online platform that connects patients with doctors for virtual medical consultations. Patients can register, describe their health concerns, and consult doctors based on specialization. Doctors also register and specify their expertise. When a patient submits a query, it is instantly forwarded to the assigned doctor via email and SMS for prompt response. The system ensures efficient communication, personalized care, and streamlined virtual healthcare services.",
      tags: ["Django", "DRF", "SQL", "DTL", "HTML", "CSS", "JS"],
      imageSrc: virtualImg, // Placeholder for Property Management
      github: "https://github.com/Mahdirizvi114", 
      demo: "https://example.com", 
    },
    {
      title: "Blood Bank Management",
      description:
        "Blood Bank Management System is a web-based platform for managing blood donations and donor information. Donors can register, schedule donations, and receive medical reports through the portal. After donation, blood is screened for diseases, and donors are promptly notified if any issues are found. The system also provides access to medical reports and offers consultancy support for affected donors. It ensures transparency, improves donor safety, and streamlines blood bank operations.",
      tags: ["Python", "Django", "Tkinker", "SQL"],
      imageSrc: bloodImg, 
      github: "https://github.com/Mahdirizvi114",
      demo: "https://example.com",
    },
    {
      title: "Property Management",
      description:
        "A comprehensive property management system built with Django and DRF for the backend, SQL for the database, and React.js for the frontend. Features include tenant management, lease tracking, rent collection, and maintenance requests.",
      tags: ["Django", "DRF", "JWT", "SQL", "TypeScript", "Reactjs"],
      imageSrc: propImg,
      github: "https://github.com/Mahdirizvi114",
      demo: "https://example.com",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="project-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt={`Screenshot of ${project.title} project`}
                   src={project.imageSrc} />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Mahdirizvi114"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              View More Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;