import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, Target, Database } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Globe,
      title: "Capture",
      description: "Leads flow in from your website, chat, calls, and forms—all tracked in real-time.",
      details: "Multi-channel ingestion with automatic deduplication and enrichment.",
    },
    {
      number: "02",
      icon: Target,
      title: "Qualify",
      description: "AI agents engage, assess intent and fit, then score each lead instantly.",
      details: "Machine learning models trained on your ideal customer profile and historical data.",
    },
    {
      number: "03",
      icon: Database,
      title: "Sync",
      description: "Qualified leads route to your CRM with alerts to the right sales rep.",
      details: "Bi-directional sync keeps data fresh and triggers automated workflows.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps from first touch to qualified opportunity
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl transition-smooth hover:glass-panel-strong animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                      <step.icon className="w-8 h-8 text-background" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-bold text-muted-foreground/20">{step.number}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-sm text-muted-foreground/80 italic">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Under the Hood */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Accordion type="single" collapsible className="glass-panel rounded-2xl overflow-hidden">
              <AccordionItem value="under-hood" className="border-none">
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline">
                  What's under the hood?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Models:</strong> Our AI uses transformer-based language models fine-tuned on millions of B2B conversations, combined with gradient-boosted decision trees for scoring.
                  </p>
                  <p>
                    <strong className="text-foreground">Data:</strong> We enrich leads with firmographic data, technographic signals, and intent signals from 50+ sources while maintaining SOC 2 Type II compliance.
                  </p>
                  <p>
                    <strong className="text-foreground">Guardrails:</strong> Human-in-the-loop validation, bias detection, and explainable AI ensure your team always understands why a lead was scored a certain way.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
