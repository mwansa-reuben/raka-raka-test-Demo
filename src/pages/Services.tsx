import { Link } from "react-router-dom";
import { Leaf, TreePine, Fish, Building, Truck, Briefcase, ArrowRight, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Leaf,
    title: "Agriculture (Broiler Chicken & Slaughter)",
    description:
      "Comprehensive trading solutions for the poultry industry, including broiler chicken supply and slaughter operations with optimized cash flow management.",
    features: [
      "Bulk poultry trading and supply",
      "Cash flow optimization for agricultural operations",
      "Supply chain financing support",
      "Working capital solutions for farmers",
    ],
  },
  {
    icon: TreePine,
    title: "Forestry",
    description:
      "Trading and cash flow facilitation services for the forestry sector, enabling smooth transactions between timber suppliers and buyers.",
    features: [
      "Timber trading facilitation",
      "Forestry product supply chain support",
      "Commercial intermediary services",
      "Working capital optimization",
    ],
  },
  {
    icon: Fish,
    title: "Fishing",
    description:
      "Supporting the fishing industry with trading solutions that bridge the gap between catch and market, ensuring liquidity throughout the value chain.",
    features: [
      "Fish product trading support",
      "Supply chain cash flow solutions",
      "Market access facilitation",
      "Quick-turn trading operations",
    ],
  },
  {
    icon: Building,
    title: "Real Estate Activities",
    description:
      "Real estate trading and investment support services, helping property transactions succeed through effective cash management.",
    features: [
      "Property transaction facilitation",
      "Real estate investment support",
      "Cash flow structuring for deals",
      "Commercial property trading",
    ],
  },
];

const additionalServices = [
  {
    icon: Truck,
    title: "Transport and Storage",
    description: "Logistics and storage solutions with integrated cash flow management to keep your supply chain moving.",
  },
  {
    icon: Briefcase,
    title: "Administrative & Support Activities",
    description: "Comprehensive administrative support to streamline your business operations and optimize working capital.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Fast trading solutions designed to meet short-term working capital needs across diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="py-8 bg-accent/10 border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-foreground font-medium">Operational Cash Flow Facilitator</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-accent" />
              <span className="text-foreground font-medium">Structuring Commercial Intermediary</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-foreground font-medium">Working Capital Fluidification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-accent font-bold">✓</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-muted rounded-lg aspect-video flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="text-center p-8">
                    <service.icon className="h-16 w-16 text-primary/30 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive support to keep your business operations running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Working Capital?
            </h2>
            <p className="text-secondary-foreground/80 mb-8">
              Contact us today to discuss how RAKARAKA can help transform stalled trade into smooth, executed transactions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;