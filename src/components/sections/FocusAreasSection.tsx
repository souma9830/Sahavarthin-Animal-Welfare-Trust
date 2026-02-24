import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, HandHeart, Stethoscope, Scale, Landmark, BookOpen } from "lucide-react";

const focusAreas = [
  {
    icon: HandHeart,
    title: "Protect the Core",
    description: "Empower animal caretakers who respond to distress calls and ensure animals and birds have access to food, water and safe shelter at grassroots level.",
    href: "/our-work/empower-caretakers",
  },
  {
    icon: Stethoscope,
    title: "Strengthen Basic Support",
    description: "Provide last-mile medical support for animals and birds, especially in remote areas where basic veterinary care is unavailable.",
    href: "/our-work/medical-support",
  },
  {
    icon: Scale,
    title: "Be Their Voice",
    description: "Raise issues with government agencies and pursue legal action whenever necessary to reduce cruelty and protect animal rights.",
    href: "/our-work/legal-advocacy",
  },
  {
    icon: Landmark,
    title: "Get Them Their Rightful Benefits",
    description: "Partner with government bodies to ensure animal welfare programs are implemented and not limited to paperwork.",
    href: "/our-work/government-collaboration",
  },
  {
    icon: BookOpen,
    title: "Advocate Coexistence",
    description: "Promote biodiversity awareness and responsible lifestyle changes through education, civic participation and sustainable urban planning.",
    href: "/our-work/education-coexistence",
  },
];

const FocusAreasSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-8"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      <div className="container-page">
        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <h2
            className="font-hero-heading text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] mb-4"
            style={{ color: "hsl(var(--hero-forest))" }}
          >
            Our Approach to Coexistence
          </h2>
          <p
            className="font-hero-body text-base md:text-lg font-light leading-relaxed"
            style={{ color: "hsl(var(--hero-forest) / 0.65)" }}
          >
            All our activities are designed, planned and executed through five clear objectives to ensure a structured and long-term impact.
          </p>
        </motion.div>

        {/* Infinite horizontal marquee */}
        <div className="overflow-hidden -mx-6 md:-mx-8">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
            style={{ width: "max-content" }}
          >
            {/* Duplicate cards for seamless loop */}
            {[...focusAreas, ...focusAreas].map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} className="w-[280px] flex-shrink-0">
                  <Link
                    to={area.href}
                    className="group block h-full rounded-md p-7 transition-colors duration-300"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E6DFCF",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-md flex items-center justify-center mb-5"
                      style={{ backgroundColor: "hsl(var(--hero-leaf) / 0.1)" }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} style={{ color: "hsl(var(--hero-leaf))" }} />
                    </div>
                    <h3
                      className="font-hero-heading text-xl mb-3 leading-snug"
                      style={{ color: "hsl(var(--hero-forest))" }}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="font-hero-body text-sm leading-[1.8] font-light mb-5"
                      style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
                    >
                      {area.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 font-hero-body text-xs font-semibold tracking-wide transition-colors duration-300"
                      style={{ color: "hsl(var(--hero-leaf))" }}
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
