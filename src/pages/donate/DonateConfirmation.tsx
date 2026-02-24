import PageLayout from "@/components/layout/PageLayout";
import SectionBlock from "@/components/sections/SectionBlock";

const DonateConfirmation = () => (
  <PageLayout>
    <div className="section-block">
      <div className="container-page text-center py-16">
        <SectionBlock id="confirmation" title="[Donation Confirmation]">
          <div className="section-placeholder py-12">
            <span className="text-sm">[Payment confirmation details — Transaction ID, Amount, Receipt Download]</span>
          </div>
        </SectionBlock>
      </div>
    </div>
  </PageLayout>
);

export default DonateConfirmation;
