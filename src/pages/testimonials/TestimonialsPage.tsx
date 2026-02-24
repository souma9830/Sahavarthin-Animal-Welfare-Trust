import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import CarouselSection from "@/components/sections/CarouselSection";
import SectionBlock from "@/components/sections/SectionBlock";

const TestimonialsPage = () => (
  <PageLayout>
    <HeroBanner pageTitle="Testimonials" subtitle="[Testimonials subtitle]" />
    <CarouselSection id="supporter-testimonials" title="[Supporter Testimonials]" />
    <SectionBlock id="community-feedback" title="[Community Feedback]" variant="muted">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-6 bg-card">
            <div className="h-3 bg-muted rounded w-full mb-2" />
            <div className="h-3 bg-muted rounded w-4/5 mb-4" />
            <div className="h-3 bg-muted rounded w-1/3" />
          </div>
        ))}
      </div>
    </SectionBlock>
  </PageLayout>
);

export default TestimonialsPage;
