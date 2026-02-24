import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  id: string;
  title: string;
  buttonLabel?: string;
  buttonHref?: string;
}

const CTABanner = ({ id, title, buttonLabel = "[Action]", buttonHref = "/donate" }: CTABannerProps) => {
  return (
    <section id={id} className="py-16 px-4 lg:px-8" style={{ background: "var(--gradient-warm)" }}>
      <div className="container-page text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">{title}</h2>
        <Button asChild size="lg">
          <Link to={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
