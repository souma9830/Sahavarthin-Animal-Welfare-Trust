import PageLayout from "@/components/layout/PageLayout";
import CTABanner from "@/components/sections/CTABanner";

const DonateThankYou = () => (
  <PageLayout>
    <div className="section-block">
      <div className="container-page text-center py-20">
        <h1 className="font-heading text-4xl text-foreground mb-4">[Thank You!]</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">[Thank you message placeholder]</p>
        <div className="section-placeholder max-w-md mx-auto py-8">
          <span className="text-sm">[Social sharing buttons, Receipt download, Email confirmation notice]</span>
        </div>
      </div>
    </div>
    <CTABanner id="share-cta" title="[Spread the Word]" buttonLabel="[Share]" buttonHref="/" />
  </PageLayout>
);

export default DonateThankYou;
