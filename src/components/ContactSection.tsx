import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kleospiceherbs@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <p className="font-display italic text-primary text-sm mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="font-body text-muted-foreground text-left leading-relaxed">
              Whether you're a home cook looking for premium spices or a business seeking wholesale supply, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "kleospiceherbs@gmail.com", href: "mailto:kleospiceherbs@gmail.com" },
                { icon: Phone, label: "+27 72 983 8166", href: "tel:+27729838166" },
                { icon: MapPin, label: "Cape Town, South Africa", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 font-body text-foreground hover:text-primary transition-colors btn-min-target"
                >
                  <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              { name: "name" as const, placeholder: "Your Name", type: "text" },
              { name: "email" as const, placeholder: "Your Email", type: "email" },
              { name: "subject" as const, placeholder: "Subject", type: "text" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full bg-card font-body text-sm text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-sm btn-min-target focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                style={{ border: "1px solid var(--border-gold)" }}
              />
            ))}
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-card font-body text-sm text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
              style={{ border: "1px solid var(--border-gold)" }}
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-sm bg-secondary text-secondary-foreground font-body text-sm font-medium px-8 py-3 btn-min-target hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
