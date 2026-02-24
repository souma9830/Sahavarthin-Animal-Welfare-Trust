import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const testimonials = [
  {
    quote: "Sahavarthin guided us in filing the FIR and dealing with authorities even when it felt like no one was listening. Their on-ground presence helped us protect the animals and resolve the situation.",
    name: "Kanchan Singh",
    location: "Chandapura, Bengaluru",
  },
  {
    quote: "They helped us understand our legal rights to feed stray cats and dogs and assisted us in requesting an official feeding spot through the municipal body. Their support has been invaluable.",
    name: "Anuja Pandey",
    location: "Sarjapura Road, Bengaluru",
  },
  {
    quote: "Whenever harassment happened in our community, Sahavarthin supported us, conducted awareness sessions and helped identify feeding spots. The hostility has significantly reduced.",
    name: "Feeders Group",
    location: "Brigade Cornerstone Utopia",
  },
  {
    quote: "I reached the helpline late at night during a conflict. They immediately guided me to file a complaint and coordinate with veterinary officials. The issue was peacefully resolved.",
    name: "Clifford Ryan",
    location: "Bengaluru",
  },
  {
    quote: "They guided me about animal rights, sterilization and vaccination support. The dogs are now settled safely in my neighbourhood.",
    name: "Vinay R",
    location: "Doddanekundi",
  },
];

const VoicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });


  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      <div className="container-page max-w-6xl mx-auto">
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
            Voices from the Community
          </h2>
          <p
            className="font-hero-body text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto"
            style={{ color: "hsl(var(--hero-forest) / 0.6)" }}
          >
            Experiences shared by citizens and animal caretakers who worked with Sahavarthin.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div
                    className="h-full rounded-md p-7 md:p-8 relative"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E6DFCF",
                    }}
                  >
                    {/* Quote icon */}
                    <Quote
                      className="h-6 w-6 mb-5 opacity-20"
                      strokeWidth={1.2}
                      style={{ color: "hsl(var(--hero-saffron))" }}
                    />

                    {/* Quote text */}
                    <p
                      className="font-hero-heading text-base md:text-[1.05rem] italic leading-[1.9] mb-6"
                      style={{ color: "hsl(var(--hero-forest) / 0.8)" }}
                    >
                      "{t.quote}"
                    </p>

                    {/* Thin divider */}
                    <div
                      className="w-10 h-px mb-4"
                      style={{ backgroundColor: "hsl(var(--hero-saffron) / 0.3)" }}
                    />

                    {/* Name & location */}
                    <p
                      className="font-hero-body text-sm font-semibold"
                      style={{ color: "hsl(var(--hero-forest))" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="font-hero-body text-xs font-light mt-0.5"
                      style={{ color: "hsl(var(--hero-forest) / 0.45)" }}
                    >
                      {t.location}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <CarouselPrevious
                className="static translate-y-0 h-9 w-9 rounded-full border"
                style={{
                  borderColor: "hsl(var(--hero-forest) / 0.15)",
                  color: "hsl(var(--hero-forest) / 0.5)",
                }}
              />
              <CarouselNext
                className="static translate-y-0 h-9 w-9 rounded-full border"
                style={{
                  borderColor: "hsl(var(--hero-forest) / 0.15)",
                  color: "hsl(var(--hero-forest) / 0.5)",
                }}
              />
            </div>
          </Carousel>
        </motion.div>

        {/* Read more link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 font-hero-body text-sm font-semibold tracking-wide transition-colors duration-300 group"
            style={{ color: "hsl(var(--hero-leaf))" }}
          >
            Read More Stories
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VoicesSection;
