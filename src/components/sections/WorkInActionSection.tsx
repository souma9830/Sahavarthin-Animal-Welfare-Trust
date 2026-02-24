import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, FileText, Phone } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Feeder Support & Guidance",
    description: "Real-time guidance, legal support, FIR assistance and conflict resolution for animal caretakers facing harassment.",
  },
  {
    icon: Users,
    title: "Government Collaboration",
    description: "Worked with Bengaluru municipal authorities to recognize feeders, assign feeding spots and integrate anti-cruelty support mechanisms.",
  },
  {
    icon: FileText,
    title: "Legal Advocacy",
    description: "Filed and intervened in public interest litigations to address policy failures, unscientific animal handling practices and implementation gaps.",
  },
];

const timelineItems = [
  { year: "2023", title: "Caretaker Workshops", description: "Workshops conducted for animal caretakers on rights, safety and legal processes." },
  { year: "2024", title: "Veterinary & Municipal Support", description: "Supported veterinary assistance initiatives and municipal level conflict resolution systems." },
  { year: "2025", title: "National Legal Intervention", description: "Intervened in national level court proceedings related to stray dog management and policy implementation." },
];

const WorkInActionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-40px" });
  const helplineRef = useRef<HTMLDivElement>(null);
  const helplineInView = useInView(helplineRef, { once: true, margin: "-40px" });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-8"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      <div className="container-page max-w-5xl mx-auto">
        {/* ── Top: Heading ── */}
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
            Our Work in Action
          </h2>
          <p
            className="font-hero-body text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto"
            style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
          >
            We work at the intersection of citizens, government systems and law to create practical and lasting change.
          </p>

          {/* Horizontal divider */}
          <div
            className="mx-auto mt-8 w-24 h-px"
            style={{ backgroundColor: "hsl(var(--hero-leaf) / 0.3)" }}
          />
        </motion.div>

        {/* ── Middle: 3-Column Highlights ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="text-center px-5 py-7 rounded-md border"
                style={{
                  backgroundColor: "hsl(var(--hero-warm-white) / 0.7)",
                  borderColor: "hsl(var(--hero-leaf) / 0.12)",
                }}
              >
                <div
                  className="w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "hsl(var(--hero-leaf) / 0.08)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.4} style={{ color: "hsl(var(--hero-leaf))" }} />
                </div>
                <h3
                  className="font-hero-heading text-lg mb-2"
                  style={{ color: "hsl(var(--hero-forest))" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-hero-body text-sm font-light leading-[1.75]"
                  style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className="mb-16 md:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-hero-heading text-2xl md:text-3xl text-center mb-10"
            style={{ color: "hsl(var(--hero-forest))" }}
          >
            Milestones
          </motion.h3>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
              style={{ backgroundColor: "hsl(var(--hero-leaf) / 0.2)" }}
            />

            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={timelineInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className={`relative flex items-start gap-5 mb-8 last:mb-0 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-[10px] h-[10px] mt-2 rounded-full border-2 md:absolute md:left-1/2 md:-translate-x-1/2"
                    style={{
                      borderColor: "hsl(var(--hero-leaf))",
                      backgroundColor: "hsl(120 20% 95%)",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    }`}
                  >
                    <span
                      className="font-hero-body text-xs font-bold uppercase tracking-wider"
                      style={{ color: "hsl(var(--hero-saffron))" }}
                    >
                      {item.year}
                    </span>
                    <h4
                      className="font-hero-heading text-base md:text-lg mt-1 mb-1"
                      style={{ color: "hsl(var(--hero-forest))" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="font-hero-body text-sm font-light leading-relaxed"
                      style={{ color: "hsl(var(--hero-forest) / 0.55)" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Helpline Box ── */}
        <motion.div
          ref={helplineRef}
          initial={{ opacity: 0 }}
          animate={helplineInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto rounded-md border-2 px-7 py-8 md:px-10 md:py-9 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{
            borderColor: "hsl(var(--hero-forest) / 0.18)",
            backgroundColor: "hsl(var(--hero-warm-white) / 0.6)",
          }}
        >
          <div
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "hsl(var(--hero-forest) / 0.08)" }}
          >
            <Phone className="h-5 w-5" strokeWidth={1.4} style={{ color: "hsl(var(--hero-forest))" }} />
          </div>
          <div className="flex-1">
            <h4
              className="font-hero-heading text-lg md:text-xl mb-1"
              style={{ color: "hsl(var(--hero-forest))" }}
            >
              Need Guidance?
            </h4>
            <p
              className="font-hero-body text-sm font-light leading-relaxed"
              style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
            >
              We provide structured assistance to animal caretakers including legal guidance, complaint procedures and liaison support with authorities.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 font-hero-body text-sm font-semibold tracking-wide flex-shrink-0 transition-colors duration-300"
            style={{ color: "hsl(var(--hero-leaf))" }}
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkInActionSection;
