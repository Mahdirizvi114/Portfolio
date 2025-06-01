
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Skills = () => {
  const categories = [
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const skills = {
    languages: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 80 },
      { name: "TypeScript", level: 65 },
    ],
    frameworks: [
      { name: "Django", level: 95 },
      { name: "Django REST Framework", level: 90 },
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "React", level: 70 },
      { name: "Celery", level: 85 },
    ],
    databases: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 80 },
      { name: "SQLite", level: 85 },
    ],
    tools: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 90 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Nginx", level: 70 },
      { name: "Linux", level: 85 },
    ],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-secondary/30 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills[category.id].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="glass-card p-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2.5">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 glass-card p-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 gradient-text">Key Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "RESTful API Design",
              "Authentication & Authorization",
              "Database Optimization",
              "Test-Driven Development",
              "Microservices",
              "API Documentation",
              "Performance Optimization",
              "Security Best Practices",
              "Containerization",
              "Cloud Deployment",
              "Agile Methodologies",
              "CI/CD Pipelines",
            ].map((competency, index) => (
              <motion.span
                key={index}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
