import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "LeadIQ AI increased our SQL rate by 42% in the first quarter. The AI qualification is incredibly accurate.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechVenture",
      metric: "+42% SQL rate",
    },
    {
      quote: "We cut response time from hours to minutes. Our sales team now focuses only on high-intent leads.",
      author: "Marcus Rodriguez",
      role: "Head of Revenue",
      company: "CloudScale",
      metric: "87% faster response",
    },
    {
      quote: "The ROI was clear within 30 days. This platform pays for itself in saved time and closed deals.",
      author: "Emily Watson",
      role: "CRO",
      company: "DataFlow Inc",
      metric: "3.2x ROI in 30 days",
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="gradient-text">Revenue Teams</span>
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">4.9/5 from 200+ companies</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl transition-smooth hover:glass-panel-strong animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-primary">{testimonial.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
