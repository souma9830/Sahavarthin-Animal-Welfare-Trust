import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import CardGridSection from "@/components/sections/CardGridSection";
import VideoSection from "@/components/sections/VideoSection";
import SectionBlock from "@/components/sections/SectionBlock";

export const MediaCoverage = () => (
  <PageLayout>
    <HeroBanner pageTitle="Media Coverage" />
    <CardGridSection id="media-coverage-grid" title="[Media Coverage]" count={6} />
  </PageLayout>
);

export const MediaVideos = () => (
  <PageLayout>
    <HeroBanner pageTitle="Videos" />
    <VideoSection id="featured-video" title="[Featured Video]" />
    <CardGridSection id="video-grid" title="[All Videos]" count={6} variant="muted" />
  </PageLayout>
);

export const PressMentions = () => (
  <PageLayout>
    <HeroBanner pageTitle="Press Mentions" />
    <CardGridSection id="press-grid" title="[Press Mentions]" count={6} />
  </PageLayout>
);

export const Publications = () => (
  <PageLayout>
    <HeroBanner pageTitle="Publications & Library" />
    <SectionBlock id="publications-filters" title="[Category Filters]" />
    <CardGridSection id="publications-grid" title="[Publications]" count={6} variant="muted" />
  </PageLayout>
);
