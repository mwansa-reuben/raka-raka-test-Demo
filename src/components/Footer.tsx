import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/rakaraka-logo.jpg";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/rakaraka", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/rakaraka", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/rakaraka", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/rakaraka", label: "LinkedIn" },
  ];
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="RAKARAKA Business Company Limited" 
                className="h-16 w-auto bg-white rounded-lg p-1"
              />
            </Link>
            <p className="text-secondary-foreground/80 text-sm">
              RakaRaka Business Company Limited - Your trusted partner for operational cash flow facilitation and working capital optimization.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground p-2 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Sectors</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Agriculture & Poultry</li>
              <li>Forestry</li>
              <li>Fishing</li>
              <li>Real Estate</li>
              <li>Transport & Storage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+260XXXXXXXXX" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  +260 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@rakaraka.com" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  info@rakaraka.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-secondary-foreground/80">
                  Lusaka, Zambia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} RAKARAKA Business Company Limited. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/40 mt-1">
            Built by Mwansa R Chikoka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;