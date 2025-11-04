import { Database, Webhook, Zap } from "lucide-react";

const Integrations = () => {
  const integrations = [
    { name: "Salesforce", description: "Full bi-directional sync" },
    { name: "HubSpot", description: "Contact & deal automation" },
    { name: "Pipedrive", description: "Lead scoring & routing" },
    { name: "Slack", description: "Real-time notifications" },
    { name: "Zapier", description: "5,000+ app connections" },
    { name: "Webhooks", description: "Custom integrations" },
  ];

  return (
    <section id="integrations" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Integrates With Your <span className="gradient-text">Entire Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect to your CRM, marketing automation, and communication tools in minutes
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl text-center transition-smooth hover:glass-panel-strong hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {index === 4 ? (
                    <Zap className="w-6 h-6 text-primary" />
                  ) : index === 5 ? (
                    <Webhook className="w-6 h-6 text-primary" />
                  ) : (
                    <Database className="w-6 h-6 text-primary" />
                  )}
                </div>
                <h3 className="font-semibold mb-1">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            ))}
          </div>

          {/* API Info */}
          <div className="glass-panel p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-2">Need a custom integration?</h3>
            <p className="text-muted-foreground mb-6">
              Use our REST API and webhooks to build exactly what you need. Full documentation and support included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="text-primary hover:text-primary-glow underline text-sm font-medium"
              >
                View API docs
              </a>
              <a
                href="#contact"
                className="text-primary hover:text-primary-glow underline text-sm font-medium"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
