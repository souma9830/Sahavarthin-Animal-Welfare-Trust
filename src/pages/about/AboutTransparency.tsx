import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import SectionBlock from "@/components/sections/SectionBlock";

const AboutTransparency = () => (
  <PageLayout>
    <HeroBanner pageTitle="Transparency & Registrations" />
    <SectionBlock id="registration-details" title="[Registration Details]" />
    <SectionBlock id="annual-reports" title="[Annual Reports]" variant="muted" />
    <SectionBlock id="financial-statements" title="[Financial Statements]" />
    <SectionBlock id="audit-reports" title="[Audit Reports]" variant="muted" />
    <SectionBlock id="certificates" title="[Certificates & Compliance]" />
  </PageLayout>
);

export default AboutTransparency;
