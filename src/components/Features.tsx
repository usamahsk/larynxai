import { Zap, Brain, MessageSquare, Link2, Route, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Multi-Channel Capture",
      description: "Capture leads from web forms, live chat, phone calls, and email—all in one unified platform.",
    },
    {
      icon: Brain,
      title: "AI Lead Scoring",
      description: "Intelligent algorithms evaluate intent and fit, prioritizing high-value prospects automatically.",
    },
    {
      icon: MessageSquare,
      title: "Conversation Intelligence",
      description: "Natural language processing understands context, sentiment, and buying signals in real-time.",
    },
    {
      icon: Link2,
      title: "CRM & ATS Integrations",
      description: "Seamlessly sync with Salesforce, HubSpot, Pipedrive, and 50+ other platforms instantly.",
    },
    {
      icon: Route,
      title: "Smart Routing & SLAs",
      description: "Automatically assign leads to the right team members based on territory, expertise, and capacity.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track conversion rates, response times, and revenue impact with real-time insights and reports.",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Everything You Need to
              <span className="gradient-text"> Qualify Leads</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for B2B teams who need to move fast without sacrificing quality
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl transition-smooth hover:glass-panel-strong hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth glow-primary">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
