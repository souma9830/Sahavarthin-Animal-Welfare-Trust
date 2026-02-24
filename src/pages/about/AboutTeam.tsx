import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import CardGridSection from "@/components/sections/CardGridSection";
import SectionBlock from "@/components/sections/SectionBlock";

const AboutTeam = () => (
  <PageLayout>
    <HeroBanner pageTitle="Leadership & Team" />
    <SectionBlock id="leadership-intro" title="[Leadership Introduction]" />
    <CardGridSection id="team-members" title="[Team Members]" count={6} variant="muted" />
    <SectionBlock id="advisory-board" title="[Advisory Board]" />
  </PageLayout>
);

export default AboutTeam;
