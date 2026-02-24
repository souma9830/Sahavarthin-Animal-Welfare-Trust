import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import SectionBlock from "@/components/sections/SectionBlock";
import CardGridSection from "@/components/sections/CardGridSection";
import FAQModule from "@/components/sections/FAQModule";
import CTABanner from "@/components/sections/CTABanner";

const DonatePage = () => (
  <PageLayout>
    <HeroBanner pageTitle="Support Our Cause" subtitle="[Donation page subtitle placeholder]" />
    <SectionBlock id="donation-options" title="[Donation Options]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["One-Time Donation", "Monthly Donation", "CSR Donation"].map((type) => (
          <div key={type} className="border-2 border-border rounded-lg p-8 bg-card text-center hover:border-primary transition-colors">
            <h3 className="font-heading text-lg mb-2">{type}</h3>
            <div className="section-placeholder py-4">
              <span className="text-xs">[{type} Module — Razorpay Integration]</span>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
    <SectionBlock id="fund-allocation" title="[Where Your Money Goes]" variant="muted" />
    <CardGridSection id="impact-areas" title="[Impact Areas]" count={4} />
    <FAQModule id="donation-faq" title="[Donation FAQs]" />
    <CTABanner id="donate-final-cta" title="[Every Contribution Counts]" buttonLabel="[Donate Now]" />
  </PageLayout>
);

export default DonatePage;
