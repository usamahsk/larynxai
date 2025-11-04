import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const tiers = [
    {
      name: "Starter",
      description: "Perfect for small teams testing AI qualification",
      monthlyPrice: 299,
      yearlyPrice: 249,
      features: [
        "Up to 500 leads/month",
        "Web & chat capture",
        "Basic AI scoring",
        "1 CRM integration",
        "2 team seats",
        "Email support",
      ],
      cta: "Start free trial",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For growing teams scaling their pipeline",
      monthlyPrice: 799,
      yearlyPrice: 665,
      features: [
        "Up to 5,000 leads/month",
        "All capture channels",
        "Advanced AI scoring",
        "Unlimited integrations",
        "10 team seats",
        "Priority support",
        "Custom workflows",
        "Analytics dashboard",
      ],
      cta: "Book a demo",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for enterprise needs",
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        "Unlimited leads",
        "Dedicated AI models",
        "White-label options",
        "Advanced security & SSO",
        "Unlimited seats",
        "24/7 phone support",
        "Custom SLAs",
        "Dedicated CSM",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. Cancel anytime. 14-day free trial on all plans.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center glass-panel rounded-full p-1 mt-8">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                  billingPeriod === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly <span className="ml-1 text-xs">(Save 17%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`glass-panel p-8 rounded-2xl transition-smooth hover:glass-panel-strong relative animate-fade-in ${
                  tier.highlighted ? "ring-2 ring-primary glow-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-8">
                  {tier.monthlyPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">
                        ${billingPeriod === "monthly" ? tier.monthlyPrice : tier.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold">Custom</div>
                  )}
                </div>

                <Button
                  variant={tier.highlighted ? "hero" : "glass"}
                  className="w-full mb-8"
                  size="lg"
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Link */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground">
              Have questions?{" "}
              <a href="#faq" className="text-primary hover:text-primary-glow underline">
                Check our FAQ
              </a>{" "}
              or{" "}
              <a href="#contact" className="text-primary hover:text-primary-glow underline">
                contact sales
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
