import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import SectionBlock from "@/components/sections/SectionBlock";

interface LegalPageProps {
  title: string;
  sections: string[];
}

const LegalPageTemplate = ({ title, sections }: LegalPageProps) => (
  <PageLayout>
    <HeroBanner pageTitle={title} />
    {sections.map((section, i) => (
      <SectionBlock
        key={section}
        id={section.toLowerCase().replace(/\s+/g, "-")}
        title={`[${section}]`}
        variant={i % 2 === 0 ? "default" : "muted"}
      />
    ))}
  </PageLayout>
);

export const PrivacyPolicy = () => (
  <LegalPageTemplate
    title="Privacy Policy"
    sections={["Introduction", "Information We Collect", "How We Use Information", "Data Sharing", "Security", "Your Rights", "Contact"]}
  />
);

export const TermsConditions = () => (
  <LegalPageTemplate
    title="Terms & Conditions"
    sections={["Agreement", "Use of Services", "User Conduct", "Intellectual Property", "Limitations", "Governing Law", "Contact"]}
  />
);

export const RefundPolicy = () => (
  <LegalPageTemplate
    title="Refund & Cancellation Policy"
    sections={["Overview", "Refund Eligibility", "Cancellation Process", "Processing Time", "Contact"]}
  />
);

export const DonationPolicy = () => (
  <LegalPageTemplate
    title="Donation Policy"
    sections={["Overview", "Types of Donations", "Tax Benefits (80G)", "Fund Utilization", "Donor Privacy", "Acknowledgment", "Contact"]}
  />
);
