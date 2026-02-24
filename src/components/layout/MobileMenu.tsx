import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileMenuProps {
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about/story" },
      { label: "Vision, Mission & Values", href: "/about/vision" },
      { label: "Leadership / Team", href: "/about/team" },
      { label: "Transparency & Registrations", href: "/about/transparency" },
      { label: "Partners & Collaborations", href: "/about/partners" },
    ],
  },
  {
    label: "Our Work",
    children: [
      { label: "Empower Caretakers", href: "/our-work/empower-caretakers" },
      { label: "Medical Support", href: "/our-work/medical-support" },
      { label: "Legal Advocacy", href: "/our-work/legal-advocacy" },
      { label: "Government Collaboration", href: "/our-work/government" },
      { label: "Education & Coexistence", href: "/our-work/education" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Internships", href: "/get-involved/internships" },
      { label: "Partner With Us", href: "/get-involved/partner" },
      { label: "CSR Collaboration", href: "/get-involved/csr" },
      { label: "Awareness Sessions", href: "/get-involved/awareness" },
    ],
  },
  {
    label: "Stories",
    children: [
      { label: "Blog / Articles", href: "/stories/blog" },
      { label: "Case Stories", href: "/stories/cases" },
      { label: "News & Announcements", href: "/stories/news" },
    ],
  },
  { label: "Events", href: "/events" },
  {
    label: "Media",
    children: [
      { label: "Media Coverage", href: "/media/coverage" },
      { label: "Videos", href: "/media/videos" },
      { label: "Press Mentions", href: "/media/press" },
      { label: "Publications", href: "/media/publications" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="lg:hidden border-t border-border bg-card max-h-[80vh] overflow-y-auto">
      <div className="p-4">
        <Button asChild className="w-full mb-4">
          <Link to="/donate" onClick={onClose}>
            <Heart className="mr-2 h-4 w-4" />
            Donate Now
          </Link>
        </Button>

        <Accordion type="single" collapsible className="w-full">
          {menuItems.map((item, i) =>
            item.children ? (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-sm font-medium">{item.label}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={onClose}
                        className="py-2 px-3 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div key={i} className="border-b border-border">
                <Link
                  to={item.href!}
                  onClick={onClose}
                  className="flex py-4 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default MobileMenu;
