import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Demo = () => {
  const [email, setEmail] = useState("");

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demo link sent to your email!");
    setEmail("");
  };

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              See LeadIQ AI <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how AI agents qualify leads in real-time, or try our interactive demo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Demo */}
            <div className="animate-fade-in">
              <div className="glass-panel p-8 rounded-2xl h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Watch 3-Minute Demo</h3>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth" />
                  <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-smooth relative z-10" />
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  See how TechVenture increased their SQL rate by 38% in 90 days using LeadIQ AI's intelligent qualification.
                </p>
                <Button variant="glass" className="w-full mt-auto">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Full Demo
                </Button>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="glass-panel p-8 rounded-2xl h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Try Interactive Demo</h3>
                <p className="text-muted-foreground mb-6">
                  Experience our AI qualification bot firsthand. Enter your email to receive instant access to a live demo environment.
                </p>
                <form onSubmit={handleDemoRequest} className="space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Get Instant Demo Access
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    No credit card required • Full feature access • 14-day trial included
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Talk to Sales CTA */}
          <div className="mt-12 glass-panel p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-2">Want a personalized walkthrough?</h3>
            <p className="text-muted-foreground mb-6">
              Book a 30-minute call with our team to discuss your specific lead qualification needs.
            </p>
            <Button variant="hero" size="lg">
              Talk to Sales
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
