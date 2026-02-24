import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY] = useState(0);

  const scrollToContent = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[92vh] md:h-[95vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <img
          src={heroImage}
          alt="A peaceful Indian street where dogs, cows and birds coexist under morning sunlight"
          className="w-full h-[120%] object-cover object-center"
        />
      </div>

      {/* Darker gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(20,35,25,0.65), rgba(20,35,25,0.35))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-page px-6 md:px-8 text-center flex flex-col items-center">
        {/* Organization name — subtle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-hero-body text-xs md:text-sm uppercase tracking-[0.3em] text-hero-sand/80 mb-6 md:mb-8"
        >
          Sahavarthin Animal Welfare Trust
        </motion.p>

        {/* Main tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.15] max-w-[780px] mb-6 md:mb-8"
          style={{ color: "#F7F4EC" }}
        >
          The key to our very existence is coexistence.
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-hero-body text-lg md:text-xl max-w-xl leading-[1.7] mb-10 md:mb-14 font-light"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Advocating compassionate and responsible living for humans, animals and the eco-system.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5"
        >
          <Button
            asChild
            size="lg"
            className="font-hero-body font-semibold text-sm tracking-wide rounded-lg shadow-none hover:shadow-none transition-colors duration-300"
            style={{
              backgroundColor: "#2F6B4F",
              color: "#F7F4EC",
              padding: "14px 26px",
              borderRadius: "8px",
            }}
          >
            <Link to="/our-work">Learn About Our Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-hero-body font-semibold text-sm tracking-wide shadow-none hover:shadow-none transition-colors duration-300"
            style={{
              backgroundColor: "transparent",
              border: "1.5px solid #E6D8B6",
              color: "#F7F4EC",
              padding: "14px 26px",
              borderRadius: "8px",
            }}
          >
            <Link to="/donate">Support the Cause</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-hero-sand/50 hover:text-hero-sand/80 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="font-hero-body text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HomeHero;
