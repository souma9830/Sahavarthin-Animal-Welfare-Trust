import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play, X } from "lucide-react";

const mediaLogos = [
  { name: "Bangalore Mirror" },
  { name: "Udayavani" },
  { name: "The Hindu" },
  { name: "ANI News" },
  { name: "Times of India" },
  { name: "Deccan Herald" },
  { name: "News18" },
  { name: "NDTV" },
];

const featuredArticles = [
  { title: "Where are the feeding spots?", source: "Bangalore Mirror", date: "" },
  { title: "Hounded for kindness", source: "Udayavani", date: "" },
  { title: "Demand effective implementation of stray dog measures", source: "The Hindu", date: "" },
  { title: "Bengaluru civic body to celebrate Kukur Tihar", source: "ANI News", date: "" },
  { title: "Activists protest stray dog policies", source: "Times of India", date: "" },
];

const InMediaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-8"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      <div className="container-page max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25 }}
          className="text-center mb-14"
        >
          <h2
            className="font-hero-heading text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] mb-4"
            style={{ color: "hsl(var(--hero-forest))" }}
          >
            In the Media
          </h2>
          <p
            className="font-hero-body text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto"
            style={{ color: "hsl(var(--hero-forest) / 0.55)" }}
          >
            Sahavarthin's work and viewpoints have been covered in civic discussions and public media platforms.
          </p>
        </motion.div>

        {/* ── Logo Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-14 md:mb-18 border rounded-md overflow-hidden"
          style={{
            borderColor: "hsl(var(--hero-forest) / 0.08)",
            backgroundColor: "hsl(var(--hero-forest) / 0.04)",
          }}
        >
          {mediaLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center py-6 px-4 transition-colors duration-300 hover:bg-white cursor-default"
              style={{ backgroundColor: "hsl(var(--hero-warm-white) / 0.5)" }}
            >
              <span
                className="font-hero-body text-xs font-medium uppercase tracking-widest opacity-30 hover:opacity-50 transition-opacity duration-300"
                style={{ color: "hsl(var(--hero-forest))" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Featured Articles ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="mb-14 md:mb-18"
        >
          <h3
            className="font-hero-heading text-xl md:text-2xl mb-6"
            style={{ color: "hsl(var(--hero-forest))" }}
          >
            Featured Mentions
          </h3>

          <div
            className="divide-y"
            style={{ borderColor: "hsl(var(--hero-forest) / 0.08)" }}
          >
            {featuredArticles.map((article, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-start sm:items-center justify-between gap-4 py-5 first:pt-0 last:pb-0 transition-colors duration-200"
              >
                <div className="flex-1 min-w-0">
                  <p
                    className="font-hero-body text-[15px] md:text-base font-medium leading-snug group-hover:underline underline-offset-2 decoration-1 transition-all"
                    style={{
                      color: "hsl(var(--hero-forest))",
                      textDecorationColor: "hsl(var(--hero-leaf) / 0.4)",
                    }}
                  >
                    {article.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className="font-hero-body text-xs font-light"
                      style={{ color: "hsl(var(--hero-forest) / 0.45)" }}
                    >
                      {article.source}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  strokeWidth={1.5}
                  style={{ color: "hsl(var(--hero-leaf))" }}
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Video Highlight ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25, delay: 0.15 }}
          className="mb-12"
        >
          <h3
            className="font-hero-heading text-xl md:text-2xl mb-5"
            style={{ color: "hsl(var(--hero-forest))" }}
          >
            Video Highlight
          </h3>

          <button
            onClick={() => setVideoOpen(true)}
            className="group relative w-full max-w-md rounded-md overflow-hidden cursor-pointer"
            style={{
              aspectRatio: "16/9",
              backgroundColor: "hsl(var(--hero-forest) / 0.06)",
              border: "1px solid hsl(var(--hero-forest) / 0.08)",
            }}
          >
            {/* Placeholder thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-hero-body text-xs uppercase tracking-widest opacity-25"
                style={{ color: "hsl(var(--hero-forest))" }}
              >
                [Video Thumbnail]
              </span>
            </div>

            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "hsl(var(--hero-forest) / 0.7)" }}
              >
                <Play className="h-5 w-5 ml-0.5 text-white" strokeWidth={1.5} fill="white" />
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                className="font-hero-body text-sm font-light"
                style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
              >
                Public discussions and awareness initiatives featuring Sahavarthin's advocacy for coexistence.
              </p>
            </div>
          </button>
        </motion.div>

        {/* Video Modal */}
        {videoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div
              className="relative w-full max-w-3xl rounded-lg overflow-hidden"
              style={{ aspectRatio: "16/9", backgroundColor: "hsl(var(--hero-forest))" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-hero-body text-sm text-white/40">[Video Player Placeholder]</span>
              </div>
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center mt-10"
        >
          <Link
            to="/media"
            className="inline-flex items-center gap-2 font-hero-body text-sm font-semibold tracking-wide transition-colors duration-300 group"
            style={{ color: "hsl(var(--hero-leaf))" }}
          >
            View All Media Coverage
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InMediaSection;
