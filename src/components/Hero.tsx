import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Clock, Users } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const metrics = [
    { icon: TrendingUp, value: "+38%", label: "SQL Rate" },
    { icon: Clock, value: "-52%", label: "Response Time" },
    { icon: Users, value: "24/7", label: "AI Agents" },
  ];

  const trustLogos = ["Salesforce", "HubSpot", "Zoom", "Slack", "Stripe", "Dropbox"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Announcement Banner */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="glass-panel px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm">
              <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs font-semibold">New</span>
              <span className="text-muted-foreground">Voice Agent now available</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              AI Agents That Qualify
              <br />
              <span className="gradient-text">Your Leads 24/7</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Automate lead capture, intelligent scoring, and seamless CRM routing. 
              Let AI handle the qualification while your team closes deals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto">
                Book a demo
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto">
                <Play className="mr-2 w-5 h-5" />
                Start free trial
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 rounded-xl text-center transition-smooth hover:glass-panel-strong animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{metric.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden glass-panel-strong p-2 glow-primary">
              <img
                src={heroDashboard}
                alt="LeadIQ AI Dashboard Interface"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Trust Logos */}
          <div className="mt-16 space-y-4">
            <p className="text-center text-sm text-muted-foreground">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-smooth cursor-pointer"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
