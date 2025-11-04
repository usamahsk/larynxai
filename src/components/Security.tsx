import { Shield, Lock, Globe, Award } from "lucide-react";

const Security = () => {
  const badges = [
    { icon: Shield, label: "SOC 2 Type II", description: "Certified" },
    { icon: Lock, label: "GDPR", description: "Compliant" },
    { icon: Globe, label: "Data Residency", description: "US & EU" },
    { icon: Award, label: "SSO/SAML", description: "Enterprise Ready" },
  ];

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Enterprise-Grade</span> Security
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your data is protected with industry-leading security standards
            </p>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl text-center transition-smooth hover:glass-panel-strong animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <badge.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold text-sm mb-1">{badge.label}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="glass-panel p-6 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm text-muted-foreground">
              All data encrypted at rest and in transit. Annual penetration testing and security audits.{" "}
              <a href="#" className="text-primary hover:text-primary-glow underline font-medium">
                Visit our Trust Center
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
