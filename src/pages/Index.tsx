import PageLayout from "@/components/layout/PageLayout";
import HomeHero from "@/components/sections/HomeHero";
import AwarenessSection from "@/components/sections/AwarenessSection";
import FocusAreasSection from "@/components/sections/FocusAreasSection";
import WorkInActionSection from "@/components/sections/WorkInActionSection";
import VoicesSection from "@/components/sections/VoicesSection";
import InMediaSection from "@/components/sections/InMediaSection";
import BePartSection from "@/components/sections/BePartSection";
import SupportCauseSection from "@/components/sections/SupportCauseSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";

const Index = () => {
  return (
    <PageLayout>
      <HomeHero />
      <div className="section-divider" />
      <AwarenessSection />
      <div className="section-divider" />
      <FocusAreasSection />
      <div className="section-divider" />
      <WorkInActionSection />
      <div className="section-divider" />
      <VoicesSection />
      <div className="section-divider" />
      <InMediaSection />
      <div className="section-divider" />
      <BePartSection />
      <div className="section-divider" />
      <SupportCauseSection />
      <div className="section-divider" />
      <GetInTouchSection />
    </PageLayout>
  );
};

export default Index;
