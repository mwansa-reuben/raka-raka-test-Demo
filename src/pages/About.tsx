import { Target, Eye, Heart, Award, Lightbulb, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import aboutTeam from "@/assets/about-rakaraka-team.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import chalweHeadshot from "@/assets/chalwe-chikoka.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We strive to continuously improve our solutions to meet the varied needs of our customers.",
  },
  {
    icon: Award,
    title: "Reliability",
    description: "We are committed to providing fast and secure trading solutions.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work closely with our clients to understand their needs and offer customized solutions.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Ethical and sustainable business practices in every transaction.",
  },
];

const managementTeam = [
  { name: "ERAS MUNUNG", role: "Director General", image: teamMember1 },
  { name: "NSONGA KINAMA ARMED", role: "Chief Financial Officer", image: teamMember2 },
  { name: "TOBI MTONGA", role: "Director of Operations", image: teamMember3 },
  { name: "CHALWE CHIKOKA BANDA", role: "Country Manager", image: chalweHeadshot.url },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About RAKARAKA
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner in operational cash flow facilitation and working capital optimization
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Team
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  RakaRaka Business Company Limited is an innovative company specializing in the trading
                  of goods and services to optimize cash management across multiple sectors including
                  Agriculture, Forestry, Fishing, Real Estate, Transport, and Administrative services.
                </p>

                <p>
                  In many high-turnover sectors, business opportunities exist but transactions do not
                  succeed due to bottlenecks in the cash cycle: suppliers limit exposure to commercial
                  risk, distributors lack immediate liquidity, and working capital flow is slowed.
                </p>

                <p className="font-semibold text-foreground">
                      RAKARAKA intervenes precisely at this blocking point.
                </p>

                <p>
                  We are an operational cash flow facilitator, a structuring commercial intermediary,
                  and a key player in the fluidification of working capital.
                </p>

                <p>
                  Our leadership and operational team combines expertise in business development,
                  finance, administration, and strategic partnerships, enabling RAKARAKA to deliver
                  reliable and innovative solutions across multiple sectors.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg border border-border bg-card">
              <img
                src={aboutTeam}
                alt="RAKARAKA Zambia Leadership Team"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

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
                To offer fast and efficient solutions to improve cash flow through
                high-turnover trading operations, enabling businesses to thrive.
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
                To be the ideal partner and benchmark for trading in cash management
                optimization operations for small and medium-sized enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at RAKARAKA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
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

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Management Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership driving RAKARAKA forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {managementTeam.map((member) => (
              <div
                key={member.name}
                className="bg-card p-6 rounded-lg border border-border text-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Our Value Creation
            </h2>

            <ul className="space-y-4 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Rapid and targeted intervention in cash flow bottlenecks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Control of commercial cycles from supplier to distributor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Clear structuring of flows between all parties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Remuneration aligned with actual transaction success</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Commitment to ethical and sustainable business practices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
