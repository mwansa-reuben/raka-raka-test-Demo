import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Users, Clock, CheckCircle, Briefcase, Building, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const stats = [
  { value: "6+", label: "Business Sectors" },
  { value: "100+", label: "Business Partners" },
  { value: "Fast", label: "Cash Solutions" },
  { value: "24/7", label: "Support Available" },
];

const sectors = [
  {
    icon: Leaf,
    title: "Agriculture",
    description: "Broiler chicken trading and slaughter operations across Zambia.",
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Property activities and real estate investment solutions.",
  },
  {
    icon: TrendingUp,
    title: "Trading Services",
    description: "Operational cash flow facilitation and working capital support.",
  },
  {
    icon: Briefcase,
    title: "Transport & Storage",
    description: "Logistics and administrative support services.",
  },
];

const testimonials = [
  {
    quote: "RAKARAKA transformed our cash cycle bottleneck into smooth operations. Their quick intervention saved our quarterly targets.",
    author: "Business Partner",
    company: "Distribution Company",
  },
  {
    quote: "The working capital support from RAKARAKA helped us execute transactions that were previously stalled. Highly recommended.",
    author: "Managing Director",
    company: "Agricultural Enterprise",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Supporting Your Working Capital Rotation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              RAKARAKA provides operational financial support to transform stalled trade into smooth, secure, and executed transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RAKARAKA?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We intervene precisely at cash cycle bottlenecks, enabling transactions that would otherwise fail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Rapid Intervention
              </h3>
              <p className="text-muted-foreground text-sm">Quick and targeted solutions when cash flow bottlenecks occur.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Secure Transactions
              </h3>
              <p className="text-muted-foreground text-sm">Clear structuring of flows between suppliers and distributors.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Partnership Focus
              </h3>
              <p className="text-muted-foreground text-sm">Remuneration aligned with the actual success of transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Business Sectors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Optimizing cash management across diverse high-turnover industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <sector.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground text-sm">{sector.description}</p>
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
              Ready to Optimize Your Cash Flow?
            </h2>
            <p className="text-secondary-foreground/80 mb-8">
              Partner with RAKARAKA to transform stalled trade into smooth, executed transactions. 
              We are the ideal partner for the optimization of your business activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <a href="tel:+260XXXXXXXXX">Call: +260 XXX XXX XXX</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Business Partners
            </h2>
            <p className="text-muted-foreground">
              See what our partners say about RAKARAKA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;