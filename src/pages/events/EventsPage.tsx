import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/sections/HeroBanner";
import CardGridSection from "@/components/sections/CardGridSection";
import SectionBlock from "@/components/sections/SectionBlock";

const EventsPage = () => (
  <PageLayout>
    <HeroBanner pageTitle="Events" subtitle="[Events page subtitle]" />
    <SectionBlock id="upcoming-events" title="[Upcoming Events]">
      <CardGridSection id="upcoming-grid" title="[Upcoming]" count={3} />
    </SectionBlock>
    <SectionBlock id="past-events" title="[Past Events]" variant="muted">
      <CardGridSection id="past-grid" title="[Past]" count={3} />
    </SectionBlock>
  </PageLayout>
);

export default EventsPage;

export const EventDetail = () => (
  <PageLayout>
    <HeroBanner pageTitle="[Event Title]" subtitle="[Event Date & Location]" />
    <SectionBlock id="event-details" title="[Event Details]" />
    <SectionBlock id="event-schedule" title="[Schedule / Agenda]" variant="muted" />
    <SectionBlock id="event-speakers" title="[Speakers / Guests]" />
    <SectionBlock id="event-registration" title="[Registration / RSVP]" variant="muted" />
    <SectionBlock id="event-gallery" title="[Event Gallery]" />
  </PageLayout>
);
