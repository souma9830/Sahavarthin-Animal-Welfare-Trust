import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About
import AboutStory from "./pages/about/AboutStory";
import AboutVision from "./pages/about/AboutVision";
import AboutTeam from "./pages/about/AboutTeam";
import AboutTransparency from "./pages/about/AboutTransparency";
import AboutPartners from "./pages/about/AboutPartners";

// Our Work
import { EmpowerCaretakers, MedicalSupport, LegalAdvocacy, GovernmentCollaboration, EducationCoexistence } from "./pages/our-work/ProgramPages";

// Get Involved
import { Volunteer, Internships, PartnerWithUs, CSRCollaboration, AwarenessSessions } from "./pages/get-involved/GetInvolvedPages";

// Donate
import DonatePage from "./pages/donate/DonatePage";
import DonateConfirmation from "./pages/donate/DonateConfirmation";
import DonateThankYou from "./pages/donate/DonateThankYou";

// Stories
import { Blog, CaseStories, News } from "./pages/stories/StoriesPages";

// Events
import EventsPage, { EventDetail } from "./pages/events/EventsPage";

// Media
import { MediaCoverage, MediaVideos, PressMentions, Publications } from "./pages/media/MediaPages";

// Gallery
import GalleryPage from "./pages/gallery/GalleryPage";

// Testimonials
import TestimonialsPage from "./pages/testimonials/TestimonialsPage";

// Contact
import ContactPage from "./pages/contact/ContactPage";

// Legal
import { PrivacyPolicy, TermsConditions, RefundPolicy, DonationPolicy } from "./pages/legal/LegalPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* About */}
          <Route path="/about/story" element={<AboutStory />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/about/transparency" element={<AboutTransparency />} />
          <Route path="/about/partners" element={<AboutPartners />} />

          {/* Our Work */}
          <Route path="/our-work/empower-caretakers" element={<EmpowerCaretakers />} />
          <Route path="/our-work/medical-support" element={<MedicalSupport />} />
          <Route path="/our-work/legal-advocacy" element={<LegalAdvocacy />} />
          <Route path="/our-work/government" element={<GovernmentCollaboration />} />
          <Route path="/our-work/education" element={<EducationCoexistence />} />

          {/* Get Involved */}
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/internships" element={<Internships />} />
          <Route path="/get-involved/partner" element={<PartnerWithUs />} />
          <Route path="/get-involved/csr" element={<CSRCollaboration />} />
          <Route path="/get-involved/awareness" element={<AwarenessSessions />} />

          {/* Donate */}
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/donate/confirmation" element={<DonateConfirmation />} />
          <Route path="/donate/thank-you" element={<DonateThankYou />} />

          {/* Stories */}
          <Route path="/stories/blog" element={<Blog />} />
          <Route path="/stories/cases" element={<CaseStories />} />
          <Route path="/stories/news" element={<News />} />

          {/* Events */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetail />} />

          {/* Media */}
          <Route path="/media/coverage" element={<MediaCoverage />} />
          <Route path="/media/videos" element={<MediaVideos />} />
          <Route path="/media/press" element={<PressMentions />} />
          <Route path="/media/publications" element={<Publications />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Testimonials */}
          <Route path="/testimonials" element={<TestimonialsPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/donation-policy" element={<DonationPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
