import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import CardGridSection from "@/components/sections/CardGridSection";
import SectionBlock from "@/components/sections/SectionBlock";

export const Blog = () => (
  <PageLayout>
    <HeroBanner pageTitle="Blog & Articles" />
    <SectionBlock id="blog-filters" title="[Category Filters]" />
    <CardGridSection id="blog-grid" title="[Articles]" count={6} variant="muted" />
    <SectionBlock id="blog-pagination" title="[Pagination]" />
  </PageLayout>
);

export const CaseStories = () => (
  <PageLayout>
    <HeroBanner pageTitle="Case Stories" />
    <CardGridSection id="case-stories-grid" title="[Case Stories]" count={6} />
  </PageLayout>
);

export const News = () => (
  <PageLayout>
    <HeroBanner pageTitle="News & Announcements" />
    <CardGridSection id="news-grid" title="[News Articles]" count={6} />
  </PageLayout>
);
