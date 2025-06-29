import React, { useRef, useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fof4ueb",
        "template_l76dfrr",
        form.current,
        "bV3mXXg-s9rsfJvdr"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Have a project in mind or just want to collaborate? Feel free to reach
          out! I'm always open to discussing new ideas, projects, or new
          opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:jatinkumar20056@gmail.com"
                    className="text-primary"
                  >
                    jatinkumar20056@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919310631261" className="text-primary">
                    +91 9310631261
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <span className="text-primary">New Delhi, India</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://www.linkedin.com/in/jatin-kumar-39b5b6242"
                  target="_blank"
                >
                  <Linkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://x.com/jatinkumar20056"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://www.instagram.com/_goku.xo_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={sendEmail} ref={form}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Jatin Sharma..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="jatinsharma@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-60"
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={16} />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
