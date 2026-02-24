interface HeroBannerProps {
  pageTitle: string;
  subtitle?: string;
}

const HeroBanner = ({ pageTitle, subtitle }: HeroBannerProps) => {
  return (
    <section className="relative py-20 md:py-28 px-4 lg:px-8" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-page relative z-10 text-center">
        <h1 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-4">{pageTitle}</h1>
        {subtitle && <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default HeroBanner;
