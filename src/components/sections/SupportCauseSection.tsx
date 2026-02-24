import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Eye, FileText, Landmark } from "lucide-react";

const presetAmounts = ["₹500", "₹1,000", "₹2,500", "₹5,000", "₹10,000"];

const trustBadges = [
  { icon: ShieldCheck, label: "Secure contribution" },
  { icon: Eye, label: "Transparent usage" },
  { icon: Landmark, label: "Registered charitable trust" },
  { icon: FileText, label: "Eligible for applicable tax benefits" },
];

const SupportCauseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string | null>("₹1,000");

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-8"
      style={{ backgroundColor: "#E6D8B6" }}
    >
      <div className="container-page max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* ── Left: Meaning Area ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.25 }}
            className="flex-1 lg:max-w-md lg:pt-4"
          >
            <h2
              className="font-hero-heading text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] mb-5"
              style={{ color: "hsl(var(--hero-forest))" }}
            >
              Support the Cause
            </h2>

            <p
              className="font-hero-body text-base font-light leading-[1.85] mb-6"
              style={{ color: "hsl(var(--hero-forest) / 0.7)" }}
            >
              Responsible coexistence requires sustained effort. Advocacy, legal intervention, education and support systems for animals depend on consistent community backing.
            </p>
            <p
              className="font-hero-body text-base font-light leading-[1.85] mb-6"
              style={{ color: "hsl(var(--hero-forest) / 0.7)" }}
            >
              Monthly contributions help us build long-term programs that improve environmental responsibility and protect animals and birds within our shared ecosystem.
            </p>

            <ul className="space-y-3 mb-0">
              {[
                "Provide legal and guidance support to animal caretakers",
                "Conduct awareness and educational programs",
                "Advocate policy improvements and implementation",
                "Strengthen grassroots coexistence initiatives",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--hero-leaf))" }}
                  />
                  <span
                    className="font-hero-body text-sm font-light leading-relaxed"
                    style={{ color: "hsl(var(--hero-forest) / 0.65)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Donation Card ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="flex-1 w-full lg:max-w-md"
          >
            <div
              className="rounded-md p-7 md:p-9"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6DFCF",
              }}
            >
              {/* Toggle */}
              <div
                className="flex rounded-md overflow-hidden mb-7 border"
                style={{ borderColor: "hsl(var(--hero-forest) / 0.1)" }}
              >
                {(["one-time", "monthly"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className="flex-1 py-2.5 font-hero-body text-sm font-medium tracking-wide transition-all duration-200 capitalize"
                    style={{
                      backgroundColor:
                        donationType === type
                          ? "hsl(var(--hero-forest))"
                          : "transparent",
                      color:
                        donationType === type
                          ? "hsl(var(--hero-warm-white))"
                          : "hsl(var(--hero-forest) / 0.5)",
                    }}
                  >
                    {type === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <p
                className="font-hero-body text-xs uppercase tracking-widest mb-3"
                style={{ color: "hsl(var(--hero-forest) / 0.4)" }}
              >
                Select Amount
              </p>
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className="py-2.5 rounded-md font-hero-body text-sm font-medium transition-colors duration-200 border"
                    style={{
                      backgroundColor:
                        selectedAmount === amt
                          ? "hsl(var(--hero-forest))"
                          : "transparent",
                      color:
                        selectedAmount === amt
                          ? "hsl(var(--hero-warm-white))"
                          : "hsl(var(--hero-forest))",
                      borderColor:
                        selectedAmount === amt
                          ? "hsl(var(--hero-forest))"
                          : "hsl(var(--hero-forest) / 0.15)",
                    }}
                  >
                    {amt}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-7">
                <input
                  type="text"
                  placeholder="Enter custom amount"
                  className="w-full rounded-md py-3 px-4 font-hero-body text-sm outline-none transition-colors duration-200 border"
                  style={{
                    borderColor: "hsl(var(--hero-forest) / 0.12)",
                    color: "hsl(var(--hero-forest))",
                    backgroundColor: "hsl(var(--hero-warm-white) / 0.5)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--hero-leaf))";
                    setSelectedAmount(null);
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--hero-forest) / 0.12)";
                  }}
                />
              </div>

              {/* Action button */}
              <Link
                to="/donate"
                className="block w-full text-center py-3.5 rounded-md font-hero-body text-sm font-semibold tracking-wide transition-colors duration-300"
                style={{
                  backgroundColor: "hsl(var(--hero-forest))",
                  color: "hsl(var(--hero-warm-white))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--hero-forest) / 0.85)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--hero-forest))";
                }}
              >
                Proceed to Support
              </Link>

              {/* Reassurance */}
              <p
                className="font-hero-body text-[11px] text-center mt-4 font-light leading-relaxed"
                style={{ color: "hsl(var(--hero-forest) / 0.4)" }}
              >
                Your support helps create a safer and more balanced environment for all living beings.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Trust Badges Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon
                  className="h-4 w-4 flex-shrink-0"
                  strokeWidth={1.4}
                  style={{ color: "hsl(var(--hero-forest) / 0.35)" }}
                />
                <span
                  className="font-hero-body text-xs font-light"
                  style={{ color: "hsl(var(--hero-forest) / 0.45)" }}
                >
                  {badge.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportCauseSection;
