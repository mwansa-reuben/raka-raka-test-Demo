import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in poultry production and handling.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our clients' success is our success. We tailor solutions to your needs.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest business practices and transparent pricing in every transaction.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent supply and on-time delivery you can count on.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About RAKA-RAKA
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner in bulk poultry supply across Zambia
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RAKA-RAKA was founded with a simple mission: to provide Zambian businesses
                  with a reliable, high-quality source of bulk poultry products. What started
                  as a small family operation has grown into one of the country's most trusted
                  B2B poultry suppliers.
                </p>
                <p>
                  Today, we serve hundreds of businesses across Zambia, from major supermarket
                  chains and hotels to restaurants and food processors. Our commitment to
                  quality, competitive pricing, and exceptional service has made us the
                  preferred choice for enterprises seeking a dependable poultry partner.
                </p>
                <p>
                  We take pride in supporting Zambia's food industry and contributing to the
                  growth of local businesses. Every delivery we make represents our promise
                  of excellence and our dedication to your success.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Serving Zambian Businesses Since Establishment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To be Zambia's most reliable bulk poultry supplier, delivering
                quality products and exceptional service that helps our business
                partners thrive and grow.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To lead the Zambian poultry industry in B2B supply, setting
                standards for quality, sustainability, and customer satisfaction
                that others aspire to achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at RAKA-RAKA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6"
              >
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Why Businesses Choose RAKA-RAKA
            </h2>
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Health-certified poultry meeting all Zambian food safety standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Competitive bulk pricing with volume discounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Flexible ordering and custom delivery schedules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Dedicated account managers for enterprise clients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Nationwide delivery coverage across Zambia</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;