import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechVenture SaaS",
      industry: "Enterprise Software",
      result: "150% increase in qualified pipeline",
      description: "How TechVenture scaled from 200 to 500 monthly SQLs while reducing cost per lead by 40%.",
      metrics: [
        { label: "SQL Growth", value: "+150%" },
        { label: "Cost Reduction", value: "-40%" },
        { label: "Time Saved", value: "20hrs/week" },
      ],
    },
    {
      company: "CloudScale Inc",
      industry: "Cloud Infrastructure",
      result: "3x faster lead response time",
      description: "CloudScale cut their average response time from 6 hours to under 2 hours with AI qualification.",
      metrics: [
        { label: "Response Time", value: "-67%" },
        { label: "Conversion Rate", value: "+45%" },
        { label: "ROI", value: "320%" },
      ],
    },
    {
      company: "DataFlow Analytics",
      industry: "Business Intelligence",
      result: "$2M ARR from better qualification",
      description: "DataFlow identified high-intent enterprise buyers 3x faster, closing deals worth $2M in Q1 alone.",
      metrics: [
        { label: "Deal Velocity", value: "+180%" },
        { label: "Win Rate", value: "+52%" },
        { label: "Q1 ARR", value: "$2M" },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Real Results from <span className="gradient-text">Real Teams</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how leading B2B companies transformed their lead qualification process
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl transition-smooth hover:glass-panel-strong group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{study.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                  <p className="text-xl font-semibold text-primary mb-4">{study.result}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold gradient-text">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Read case study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
