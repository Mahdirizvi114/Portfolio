
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Globe } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-xl">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-4xl bg-secondary">PD</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Python Backend Developer with a passion for building scalable web applications
            </h3>
            <p className="text-muted-foreground mb-6">
              I specialize in developing robust backend systems using Django and Django REST Framework. With a strong foundation in Python and a deep understanding of web development principles, I create efficient, secure, and maintainable applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-6">
              My experience spans from designing database schemas and implementing RESTful APIs to deploying applications in cloud environments. I'm passionate about clean code, test-driven development, and continuous integration practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: <Code className="h-5 w-5 text-blue-400" />,
                  title: "Clean Code",
                  description: "Writing maintainable, well-documented code following best practices",
                },
                {
                  icon: <Server className="h-5 w-5 text-purple-400" />,
                  title: "API Development",
                  description: "Creating robust RESTful APIs with Django REST Framework",
                },
                {
                  icon: <Database className="h-5 w-5 text-green-400" />,
                  title: "Database Design",
                  description: "Designing efficient database schemas and optimizing queries",
                },
                {
                  icon: <Globe className="h-5 w-5 text-orange-400" />,
                  title: "Deployment",
                  description: "Deploying applications to cloud platforms with CI/CD pipelines",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
