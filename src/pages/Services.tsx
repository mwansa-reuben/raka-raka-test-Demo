import { Link } from "react-router-dom";
import { Truck, ShoppingCart, Shield, Package, Clock, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Package,
    title: "Bulk Chicken Supply",
    description:
      "Large-scale poultry supply for supermarkets, hotels, restaurants, and food processors. We handle orders of any size with consistent quality.",
    features: [
      "Whole chickens, cuts, and processed products",
      "Volume-based pricing tiers",
      "Regular supply contracts available",
      "Cold chain maintained throughout",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Custom Orders",
    description:
      "Tailored ordering options to meet your specific business requirements. Tell us what you need, and we'll deliver exactly that.",
    features: [
      "Flexible quantities and product mix",
      "Custom packaging options",
      "Scheduled delivery dates",
      "Special processing requests",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every product meets strict quality and safety standards. We're committed to providing only the best to your customers.",
    features: [
      "Health-certified products",
      "Regular quality inspections",
      "Traceability documentation",
      "Compliance with Zambian food standards",
    ],
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description:
      "Reliable nationwide delivery to keep your business running smoothly. We deliver on time, every time.",
    features: [
      "Coverage across all Zambian provinces",
      "Temperature-controlled transport",
      "Flexible delivery windows",
      "Real-time delivery tracking",
    ],
  },
];

const additionalServices = [
  {
    icon: Clock,
    title: "Emergency Supply",
    description: "Need an urgent order? We offer expedited processing for time-sensitive requirements.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Enterprise clients get a dedicated account manager for personalized service.",
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
              Comprehensive bulk poultry solutions designed for Zambian businesses
            </p>
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
              Additional Support
            </h2>
            <p className="text-muted-foreground">
              Extra services to ensure your business runs smoothly
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
              Ready to Get Started?
            </h2>
            <p className="text-secondary-foreground/80 mb-8">
              Contact us today to discuss your bulk poultry requirements and get a customized quote.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;