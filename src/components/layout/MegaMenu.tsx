import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const HOVER_BG = "#E6D8B6";
const ACTIVE_BG = "#E6D8B6";
const ACTIVE_TEXT = "#1F4D3A";
const TEXT_COLOR = "#2E3A32";

const aboutLinks = [
  { label: "Our Story", href: "/about/story" },
  { label: "Vision, Mission & Values", href: "/about/vision" },
  { label: "Leadership / Team", href: "/about/team" },
  { label: "Transparency & Registrations", href: "/about/transparency" },
  { label: "Partners & Collaborations", href: "/about/partners" },
];

const workLinks = [
  { label: "Empower Caretakers", href: "/our-work/empower-caretakers" },
  { label: "Medical Support Initiatives", href: "/our-work/medical-support" },
  { label: "Legal Advocacy", href: "/our-work/legal-advocacy" },
  { label: "Government Collaboration", href: "/our-work/government" },
  { label: "Education & Coexistence", href: "/our-work/education" },
];

const involveLinks = [
  { label: "Volunteer", href: "/get-involved/volunteer" },
  { label: "Internships", href: "/get-involved/internships" },
  { label: "Partner With Us", href: "/get-involved/partner" },
  { label: "CSR Collaboration", href: "/get-involved/csr" },
  { label: "Awareness Sessions", href: "/get-involved/awareness" },
];

const storiesLinks = [
  { label: "Blog / Articles", href: "/stories/blog" },
  { label: "Case Stories", href: "/stories/cases" },
  { label: "News & Announcements", href: "/stories/news" },
];

const mediaLinks = [
  { label: "Media Coverage", href: "/media/coverage" },
  { label: "Videos", href: "/media/videos" },
  { label: "Press Mentions", href: "/media/press" },
  { label: "Publications / Library", href: "/media/publications" },
];

const NavDropdown = ({
  label,
  links,
  basePath,
}: {
  label: string;
  links: { label: string; href: string }[];
  basePath: string;
}) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const isActive = location.pathname.startsWith(basePath);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="px-3 py-1.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 rounded-md"
        style={{
          color: isActive ? ACTIVE_TEXT : TEXT_COLOR,
          backgroundColor: isActive || open ? ACTIVE_BG : "transparent",
        }}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.backgroundColor = HOVER_BG;
        }}
        onMouseLeave={(e) => {
          if (!isActive && !open) e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="ml-0.5 mt-px transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0"
          style={{
            top: "calc(100% + 8px)",
            minWidth: "260px",
            zIndex: 50,
            backgroundColor: "#FBF8F2",
            border: "1px solid #E6DFCF",
            borderRadius: "6px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <ul className="py-2">
            {links.map((link) => {
              const isLinkActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-2.5 text-sm transition-all duration-150 rounded-sm mx-1"
                    style={{
                      color: isLinkActive ? ACTIVE_TEXT : TEXT_COLOR,
                      backgroundColor: isLinkActive ? ACTIVE_BG : "transparent",
                      fontWeight: isLinkActive ? 600 : 400,
                    }}
                    onMouseEnter={(e) => {
                      if (!isLinkActive) e.currentTarget.style.backgroundColor = HOVER_BG;
                    }}
                    onMouseLeave={(e) => {
                      if (!isLinkActive) e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ label, href }: { label: string; href: string }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className="px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md"
      style={{
        color: isActive ? ACTIVE_TEXT : TEXT_COLOR,
        backgroundColor: isActive ? ACTIVE_BG : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.backgroundColor = HOVER_BG;
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {label}
    </Link>
  );
};

const MegaMenu = () => {
  return (
    <nav className="flex items-center gap-0.5">
      <NavLink label="Home" href="/" />
      <NavDropdown label="About" links={aboutLinks} basePath="/about" />
      <NavDropdown label="Our Work" links={workLinks} basePath="/our-work" />
      <NavDropdown label="Get Involved" links={involveLinks} basePath="/get-involved" />
      <NavDropdown label="Stories" links={storiesLinks} basePath="/stories" />
      <NavLink label="Events" href="/events" />
      <NavDropdown label="Media" links={mediaLinks} basePath="/media" />
      <NavLink label="Gallery" href="/gallery" />
      <NavLink label="Testimonials" href="/testimonials" />
      <NavLink label="Contact" href="/contact" />
    </nav>
  );
};

export default MegaMenu;
