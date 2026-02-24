import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import HighlightSection from "@/components/sections/HighlightSection";
import SectionBlock from "@/components/sections/SectionBlock";
import CTABanner from "@/components/sections/CTABanner";

const AboutStory = () => (
  <PageLayout>
    <HeroBanner pageTitle="Our Story" subtitle="[About page subtitle placeholder]" />
    <HighlightSection id="founding-story" title="[Founding Story]" />
    <SectionBlock id="journey-timeline" title="[Our Journey / Timeline]" variant="muted" />
    <SectionBlock id="what-we-stand-for" title="[What We Stand For]" />
    <CTABanner id="about-cta" title="[Join Our Mission]" buttonLabel="[Get Involved]" buttonHref="/get-involved/volunteer" />
  </PageLayout>
);

export default AboutStory;
