import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import closingBg from "@/assets/closing-dusk.jpg";

const contactBlocks = [
  { icon: Mail, label: "Email", value: "contact@sahavarthin.org" },
  { icon: Phone, label: "Helpline", value: "9535475235" },
  { icon: MapPin, label: "Location", value: "Kodichikkanahalli, Bengaluru – 560076" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
];

const GetInTouchSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 px-6 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#1F4D3A" }}
    >
      {/* Background image — static */}
      <div className="absolute inset-0">
        <img
          src={closingBg}
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
          aria-hidden="true"
        />
      </div>

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-forest/75 via-hero-forest/65 to-hero-forest/80" />

      <div className="relative z-10 container-page max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25 }}
        >
          <h2 className="font-hero-heading text-3xl sm:text-4xl md:text-5xl leading-[1.2] mb-4 text-hero-warm-white">
            Get in Touch
          </h2>
          <p className="font-hero-body text-base md:text-lg font-light leading-relaxed max-w-md mx-auto text-hero-sand/60 mb-12 md:mb-16">
            If you need guidance, awareness support or assistance regarding animal related conflicts, you can reach out to us.
          </p>
        </motion.div>

        {/* Contact blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mb-12 md:mb-14"
        >
          {contactBlocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2.5">
                <Icon className="h-5 w-5 text-hero-sand/50" strokeWidth={1.4} />
                <span className="font-hero-body text-[10px] uppercase tracking-[0.2em] text-hero-sand/40">
                  {block.label}
                </span>
                <span className="font-hero-body text-sm font-light text-hero-warm-white/80">
                  {block.value}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25, delay: 0.15 }}
          className="mb-4"
        >
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 rounded-md font-hero-body text-sm font-semibold tracking-wide transition-colors duration-200"
            style={{
              backgroundColor: "#2F6B4F",
              color: "#FBF8F2",
            }}
          >
            Contact Us
          </Link>
          <p className="font-hero-body text-[11px] text-hero-sand/40 mt-4">
            We currently handle cruelty-related guidance within Karnataka jurisdiction.
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="font-hero-body text-[10px] uppercase tracking-[0.15em] text-hero-sand/30 hover:text-hero-sand/60 transition-colors duration-300"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
