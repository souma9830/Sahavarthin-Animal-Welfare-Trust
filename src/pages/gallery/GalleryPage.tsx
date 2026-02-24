import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import SectionBlock from "@/components/sections/SectionBlock";

const GalleryPage = () => (
  <PageLayout>
    <HeroBanner pageTitle="Gallery" subtitle="[Gallery subtitle placeholder]" />
    <SectionBlock id="photo-albums" title="[Photo Albums]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs">
            [Album {i + 1}]
          </div>
        ))}
      </div>
    </SectionBlock>
    <SectionBlock id="video-gallery" title="[Video Gallery]" variant="muted">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs">
            [Video {i + 1}]
          </div>
        ))}
      </div>
    </SectionBlock>
  </PageLayout>
);

export default GalleryPage;
