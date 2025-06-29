import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              I'm a dedicated full-stack web developer with a strong command of
              the MERN stack (MongoDB, Express, React, Node.js).
            </p>
            <p className="text-muted-foreground">
              I specialize in turning ideas into responsive, scalable, and
              user-friendly applications. From crafting clean UIs to building
              robust backend systems, I focus on performance and user
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1FaWp3fsFZAddpxkGNSCNs5lqvYc0kZx0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Section - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Building responsive websites and full-stack apps using modern frameworks.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                desc: "Designing user-friendly, intuitive interfaces for engaging user experiences.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Managing and delivering projects on time with high-quality outcomes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
