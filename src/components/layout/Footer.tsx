import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import Newsletter from "./Newsletter";

const quickLinks = [
  { label: "About Us", href: "/about/story" },
  { label: "Our Work", href: "/our-work/empower-caretakers" },
  { label: "Get Involved", href: "/get-involved/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
  { label: "Donation Policy", href: "/donation-policy" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <Newsletter />

      {/* Main Footer */}
      <div className="container-page px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sahavarthin" className="h-12 w-12 object-contain" />
              <div>
                <span className="font-heading text-lg block">Sahavarthin</span>
                <span className="text-xs opacity-70">Animal Welfare Trust</span>
              </div>
            </Link>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>[Office address placeholder]</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>[Phone placeholder]</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>[Email placeholder]</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-base mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-base mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Sahavarthin Animal Welfare Trust. All rights reserved.</span>
          <span>Registered under the Indian Trusts Act</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
