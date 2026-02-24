import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import CardGridSection from "@/components/sections/CardGridSection";
import SectionBlock from "@/components/sections/SectionBlock";

const AboutPartners = () => (
  <PageLayout>
    <HeroBanner pageTitle="Partners & Collaborations" />
    <SectionBlock id="partners-intro" title="[Partnership Overview]" />
    <CardGridSection id="partner-logos" title="[Our Partners]" count={6} variant="muted" />
    <SectionBlock id="become-partner" title="[Become a Partner]" />
  </PageLayout>
);

export default AboutPartners;
