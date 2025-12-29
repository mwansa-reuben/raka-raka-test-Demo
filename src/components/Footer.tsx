import { Link } from "react-router-dom";
import { Bird, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Bird className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">RAKA-RAKA</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm">
              Zambia's trusted bulk poultry supplier, serving major businesses
              with quality chicken products since establishment.
            </p>
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
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Bulk Chicken Supply</li>
              <li>Custom Orders</li>
              <li>Quality Assurance</li>
              <li>Nationwide Delivery</li>
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
                <a href="mailto:info@rakaraka.zm" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  info@rakaraka.zm
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
            © {new Date().getFullYear()} RAKA-RAKA. All rights reserved. | Sample Demo Website
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;