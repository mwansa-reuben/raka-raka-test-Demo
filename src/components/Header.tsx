import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/navbar";
import logo from "@/assets/rakaraka-logo.jpg";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo logo={logo} alt="RAKARAKA Business Company Limited" />
        <NavItems items={navLinks} />
        <div className="flex items-center gap-4">
          <NavbarButton
            as={Link}
            href="/contact"
            variant="gradient"
          >
            Get Quote
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo logo={logo} alt="RAKARAKA Business Company Limited" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <NavbarButton
            as={Link}
            href="/contact"
            variant="gradient"
            className="w-full mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Quote
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
