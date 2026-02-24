import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import coexistenceImg from "@/assets/coexistence-illustration.jpg";

const AwarenessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-page px-6 md:px-8 lg:px-12">
        {/* Two-column layout */}
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="flex-1 max-w-[650px]"
          >
            {/* Section label */}
            <p
              className="font-hero-body text-xs uppercase tracking-[0.25em] mb-4"
              style={{ color: "hsl(var(--hero-leaf))" }}
            >
              Understanding Coexistence
            </p>

            {/* Heading */}
            <h2
              className="font-hero-heading text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] mb-4"
              style={{ color: "hsl(var(--hero-forest))" }}
            >
              Despite laws, why does suffering continue?
            </h2>

            {/* Subheading */}
            <p
              className="font-hero-body text-base md:text-lg leading-relaxed mb-8 font-light"
              style={{ color: "hsl(var(--hero-forest) / 0.7)" }}
            >
              India rolled out animal protection laws 63 years ago. Yet the plight of animals and birds across the country continues to be deplorable and heart wrenching.
            </p>

            {/* Organic divider */}
            <svg
              viewBox="0 0 200 12"
              className="w-32 mb-8 opacity-30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8 C30 2, 50 10, 80 6 S130 2, 160 7 S185 4, 198 6"
                stroke="hsl(var(--hero-leaf))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Small leaf accent */}
              <ellipse
                cx="100"
                cy="5"
                rx="4"
                ry="2"
                transform="rotate(-30 100 5)"
                fill="hsl(var(--hero-leaf))"
                opacity="0.4"
              />
            </svg>

            {/* Paragraphs */}
            <div className="space-y-5 mb-10">
              <div className="rounded-sm px-0 py-1">
                <p
                  className="font-hero-body text-[15px] md:text-base leading-[1.85] font-light"
                  style={{ color: "hsl(var(--hero-forest) / 0.75)" }}
                >
                  The human population explosion and rapid urban development have worsened the plight of animals and birds through extreme habitat displacement that is yet to be recognized and acknowledged.
                </p>
              </div>

              <div className="rounded-sm px-0 py-1">
                <p
                  className="font-hero-body text-[15px] md:text-base leading-[1.85] font-light mb-3"
                  style={{ color: "hsl(var(--hero-forest) / 0.75)" }}
                >
                  Today an average Indian is oblivious to the fact that:
                </p>
                <ul className="space-y-2 pl-1">
                  {[
                    "We cannot use chemicals everywhere and expect chemical free fruits and vegetables.",
                    "We cannot destroy bees as nuisance and then expect good supply of food.",
                    "We cannot cut trees indiscriminately and expect clean air to breathe.",
                    "We cannot eliminate animals and birds as per our own definition of nuisance and expect ecological balance to prevail.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "hsl(var(--hero-leaf) / 0.5)" }}
                      />
                      <span
                        className="font-hero-body text-[15px] md:text-base leading-[1.85] font-light"
                        style={{ color: "hsl(var(--hero-forest) / 0.75)" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm px-0 py-1">
                <p
                  className="font-hero-body text-[15px] md:text-base leading-[1.85] font-light"
                  style={{ color: "hsl(var(--hero-forest) / 0.75)" }}
                >
                  Our entitlement is costing us dearly. There are consequences to every act of ours. We are polluting air, water and land. We are destroying habitats. We are constantly breaking the ecological chain in the name of industrialization and urban development.
                </p>
              </div>
            </div>

            {/* Quote block */}
            <blockquote
              className="relative pl-5 py-3 mb-10 border-l-2"
              style={{ borderColor: "hsl(var(--hero-saffron) / 0.5)" }}
            >
              <p
                className="font-hero-heading text-xl md:text-2xl italic leading-relaxed"
                style={{ color: "hsl(var(--hero-forest) / 0.85)" }}
              >
                "Humans are only consumers and alpha predators in the cycle of life. It is high time we realize we are the invasive species recklessly destroying resources without giving anything back to Mother Nature."
              </p>
            </blockquote>

            {/* Closing line */}
            <p
              className="font-hero-body text-[15px] md:text-base leading-[1.85] font-light mb-8"
              style={{ color: "hsl(var(--hero-forest) / 0.75)" }}
            >
              Rescue and rehabilitation is only a remedy to the symptoms. The core problem is ignorance towards accepting animals and birds as living beings sharing space with us on earth.
            </p>

            {/* Soft CTA link */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-hero-body text-sm font-semibold tracking-wide group transition-colors duration-300"
              style={{ color: "hsl(var(--hero-leaf))" }}
            >
              Know More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex-1 w-full md:sticky md:top-28"
          >
            <div className="relative">
              {/* Saffron accent border offset */}
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-sm opacity-20"
                style={{ border: "2px solid hsl(var(--hero-saffron))" }}
              />
              <img
                src={coexistenceImg}
                alt="Illustration of coexistence — birds, trees, a dog, and bees in an Indian neighborhood"
                className="relative w-full rounded-sm shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
