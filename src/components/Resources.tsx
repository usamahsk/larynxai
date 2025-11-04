import { BookOpen, Video, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      category: "Guide",
      title: "The Complete Guide to AI Lead Qualification",
      description: "Learn how to implement AI-powered qualification in your sales process.",
      readTime: "12 min read",
    },
    {
      icon: Video,
      category: "Webinar",
      title: "From MQL to SQL: Automating Lead Scoring",
      description: "Watch our expert panel discuss best practices for modern lead qualification.",
      readTime: "45 min watch",
    },
    {
      icon: FileText,
      category: "Blog",
      title: "How We Increased SQLs by 150% in 90 Days",
      description: "Case study breakdown of TechVenture's transformation with AI agents.",
      readTime: "8 min read",
    },
  ];

  return (
    <section id="resources" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Learn & <span className="gradient-text">Grow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resources to help you master AI-powered lead qualification
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl transition-smooth hover:glass-panel-strong group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <resource.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read more
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="glass" size="lg">
              View All Resources
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
