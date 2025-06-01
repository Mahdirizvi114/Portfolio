import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/Mahdirizvi114", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/syed-muhammad-mehdi-8aa4b4234/", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:syedmuhammadmehdi159@gmail.com", label: "Email" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold gradient-text">Python Dev</span>
            <p className="text-muted-foreground mt-2 max-w-md">
              Building robust backend solutions with Django and Django REST Framework.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground flex items-center">
              <span>© {currentYear} - Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>by Python Dev</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p>
            This portfolio showcases my skills and projects as a Python Backend Developer.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;