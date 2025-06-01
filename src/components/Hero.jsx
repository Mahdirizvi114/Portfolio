import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Python Backend Developer
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Building robust <span className="gradient-text">backend solutions</span> with Django
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Specialized in creating scalable and secure backend systems using Django and Django REST Framework. Turning complex requirements into elegant solutions.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* View Resume Button */}
              <Button size="lg" variant="outline" asChild>
                <a
                  href="/src/components/images/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>

              {/* <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="glass-card p-8 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-muted-foreground">terminal</div>
              </div>
              <div className="font-mono text-sm">
                <p className="text-green-400 mb-2">$ python manage.py runserver</p>
                <p className="text-muted-foreground mb-2">Watching for file changes with StatReloader</p>
                <p className="text-muted-foreground mb-2">Performing system checks...</p>
                <p className="text-muted-foreground mb-2">System check identified no issues (0 silenced).</p>
                <p className="text-green-400 mb-2">$ Starting development server at http://127.0.0.1:8000/</p>
                <p className="text-muted-foreground">Quit the server with CONTROL-C.</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass-card p-4 z-20">
              <Terminal className="h-8 w-8 text-blue-400" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 z-20">
              <Database className="h-8 w-8 text-purple-400" />
            </div>
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 glass-card p-4 z-20">
              <Server className="h-8 w-8 text-green-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
