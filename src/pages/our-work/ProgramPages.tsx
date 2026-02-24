import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import HighlightSection from "@/components/sections/HighlightSection";
import StatsCounterSection from "@/components/sections/StatsCounterSection";
import VideoSection from "@/components/sections/VideoSection";
import CarouselSection from "@/components/sections/CarouselSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionBlock from "@/components/sections/SectionBlock";

interface ProgramPageProps {
  title: string;
  subtitle?: string;
  programId: string;
}

const ProgramPage = ({ title, subtitle, programId }: ProgramPageProps) => (
  <PageLayout>
    <HeroBanner pageTitle={title} subtitle={subtitle} />
    <HighlightSection id={`${programId}-overview`} title="[Program Overview]" />
    <StatsCounterSection id={`${programId}-impact`} title="[Program Impact]" />
    <SectionBlock id={`${programId}-approach`} title="[Our Approach]" variant="muted" />
    <VideoSection id={`${programId}-video`} title="[Program Video]" />
    <CarouselSection id={`${programId}-stories`} title="[Program Stories]" variant="accent" />
    <CTABanner id={`${programId}-cta`} title="[Support This Program]" buttonLabel="[Donate]" />
  </PageLayout>
);

export const EmpowerCaretakers = () => (
  <ProgramPage title="Empower Caretakers" subtitle="[Program subtitle placeholder]" programId="empower" />
);

export const MedicalSupport = () => (
  <ProgramPage title="Medical Support Initiatives" subtitle="[Program subtitle placeholder]" programId="medical" />
);

export const LegalAdvocacy = () => (
  <ProgramPage title="Legal Advocacy" subtitle="[Program subtitle placeholder]" programId="legal" />
);

export const GovernmentCollaboration = () => (
  <ProgramPage title="Government Collaboration" subtitle="[Program subtitle placeholder]" programId="government" />
);

export const EducationCoexistence = () => (
  <ProgramPage title="Education & Coexistence Awareness" subtitle="[Program subtitle placeholder]" programId="education" />
);
