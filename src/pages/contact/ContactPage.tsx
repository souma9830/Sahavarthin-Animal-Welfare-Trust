import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import FormModule from "@/components/sections/FormModule";
import SectionBlock from "@/components/sections/SectionBlock";

const ContactPage = () => (
  <PageLayout>
    <HeroBanner pageTitle="Contact & Help" subtitle="[Contact page subtitle]" />
    <div className="section-block">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-2xl mb-4">[Office Information]</h2>
          <div className="space-y-4">
            <div className="section-placeholder py-4"><span className="text-xs">[Address Block]</span></div>
            <div className="section-placeholder py-4"><span className="text-xs">[Phone & Email]</span></div>
            <div className="section-placeholder py-4"><span className="text-xs">[Working Hours]</span></div>
            <div className="section-placeholder py-4"><span className="text-xs">[Google Map Embed]</span></div>
          </div>
          <h3 className="font-heading text-lg mt-8 mb-3">[Social Links]</h3>
          <div className="section-placeholder py-4"><span className="text-xs">[Social Media Icons]</span></div>
        </div>
        <div>
          <FormModule id="contact-form" title="[Contact Form]" fields={["Name", "Email", "Phone", "Subject", "Message"]} variant="default" />
        </div>
      </div>
    </div>
    <FormModule id="help-request-form" title="[Help Request Form]" fields={["Name", "Email", "Phone", "Location", "Type of Help", "Description"]} hasFileUpload variant="muted" />
  </PageLayout>
);

export default ContactPage;
