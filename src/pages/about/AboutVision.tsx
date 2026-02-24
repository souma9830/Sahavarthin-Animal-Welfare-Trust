import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import SectionBlock from "@/components/sections/SectionBlock";

const AboutVision = () => (
  <PageLayout>
    <HeroBanner pageTitle="Vision, Mission & Values" />
    <SectionBlock id="vision" title="[Our Vision]" />
    <SectionBlock id="mission" title="[Our Mission]" variant="muted" />
    <SectionBlock id="core-values" title="[Core Values]" variant="accent" />
  </PageLayout>
);

export default AboutVision;
