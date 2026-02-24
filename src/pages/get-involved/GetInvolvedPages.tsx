import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import HighlightSection from "@/components/sections/HighlightSection";
import FormModule from "@/components/sections/FormModule";
import SectionBlock from "@/components/sections/SectionBlock";
import FAQModule from "@/components/sections/FAQModule";

export const Volunteer = () => (
  <PageLayout>
    <HeroBanner pageTitle="Volunteer With Us" subtitle="[Volunteer page subtitle]" />
    <HighlightSection id="volunteer-why" title="[Why Volunteer]" />
    <SectionBlock id="volunteer-roles" title="[Volunteer Roles]" variant="muted" />
    <FormModule id="volunteer-form" title="[Volunteer Application]" fields={["Full Name", "Email", "Phone", "City", "Area of Interest", "Message"]} />
    <FAQModule id="volunteer-faq" title="[Volunteer FAQs]" />
  </PageLayout>
);

export const Internships = () => (
  <PageLayout>
    <HeroBanner pageTitle="Internship Programs" />
    <HighlightSection id="internship-overview" title="[Internship Overview]" />
    <SectionBlock id="internship-programs" title="[Available Programs]" variant="muted" />
    <FormModule id="internship-form" title="[Apply for Internship]" fields={["Full Name", "Email", "Institution", "Duration", "Message"]} hasFileUpload />
  </PageLayout>
);

export const PartnerWithUs = () => (
  <PageLayout>
    <HeroBanner pageTitle="Partner With Us" />
    <HighlightSection id="partnership-overview" title="[Partnership Opportunities]" />
    <SectionBlock id="partnership-types" title="[Types of Partnerships]" variant="muted" />
    <FormModule id="partnership-form" title="[Partnership Inquiry]" fields={["Organization Name", "Contact Person", "Email", "Phone", "Proposal", "Message"]} />
  </PageLayout>
);

export const CSRCollaboration = () => (
  <PageLayout>
    <HeroBanner pageTitle="Corporate / CSR Collaboration" />
    <HighlightSection id="csr-overview" title="[CSR Overview]" />
    <SectionBlock id="csr-benefits" title="[Benefits of CSR Partnership]" variant="muted" />
    <SectionBlock id="csr-projects" title="[CSR Projects]" />
    <FormModule id="csr-form" title="[CSR Inquiry Form]" fields={["Company Name", "Contact Person", "Email", "Phone", "CSR Budget Range", "Message"]} />
  </PageLayout>
);

export const AwarenessSessions = () => (
  <PageLayout>
    <HeroBanner pageTitle="Awareness Sessions" />
    <HighlightSection id="awareness-overview" title="[Session Overview]" />
    <SectionBlock id="session-types" title="[Types of Sessions]" variant="muted" />
    <FormModule id="awareness-form" title="[Request a Session]" fields={["Organization/School Name", "Contact Person", "Email", "Phone", "Preferred Date", "Audience Size", "Message"]} />
  </PageLayout>
);
