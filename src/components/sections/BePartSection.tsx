import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, HeartHandshake, Handshake, Megaphone, Sprout } from "lucide-react";

const participationCards = [
  {
    icon: HeartHandshake,
    title: "Volunteer",
    description: "Support field activities, awareness initiatives and community coordination efforts that help animals and caretakers.",
    href: "/get-involved/volunteer",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate with us as an organization, community group or institution to implement coexistence initiatives and outreach programs.",
    href: "/get-involved/partner",
  },
  {
    icon: Megaphone,
    title: "Advocate Compassion",
    description: "Help spread awareness about responsible and compassionate living through campaigns, discussions and civic participation.",
    href: "/get-involved/awareness-sessions",
  },
  {
    icon: Sprout,
    title: "Internships",
    description: "Schools and colleges can work with us on advocacy projects that help students understand biodiversity and prevention-based solutions.",
    href: "/get-involved/internships",
  },
];

const BePartSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-8"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      <div className="container-page max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-hero-heading text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] mb-4"
            style={{ color: "hsl(var(--hero-forest))" }}
          >
            Be Part of the Change
          </h2>
          <p
            className="font-hero-body text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto"
            style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
          >
            Protecting the eco-system is a shared social responsibility. You can contribute in many ways beyond donations.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
          {participationCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <Link
                  to={card.href}
                  className="group block h-full rounded-md p-7 md:p-8 transition-colors duration-300"
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
                    className="font-hero-heading text-xl mb-2 leading-snug"
                    style={{ color: "hsl(var(--hero-forest))" }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="font-hero-body text-sm font-light leading-[1.8] mb-5"
                    style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
                  >
                    {card.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-1.5 font-hero-body text-xs font-semibold tracking-wide transition-colors duration-300"
                    style={{ color: "hsl(var(--hero-leaf))" }}
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BePartSection;
