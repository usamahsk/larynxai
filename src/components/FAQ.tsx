import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does LeadIQ AI protect my data?",
      answer: "We're SOC 2 Type II compliant with end-to-end encryption. All data is stored in secure, GDPR-compliant data centers. We never share or sell your data, and you maintain full ownership.",
    },
    {
      question: "How long does integration take?",
      answer: "Most customers are up and running in under 2 hours. Our one-click integrations connect to major CRMs instantly, and our support team helps with custom workflows at no extra cost.",
    },
    {
      question: "How accurate is the AI scoring?",
      answer: "Our models achieve 91% accuracy on lead quality prediction, continuously improving as they learn from your feedback. You can always adjust scoring criteria to match your ICP.",
    },
    {
      question: "Can I customize the qualification criteria?",
      answer: "Absolutely. You can define custom fields, scoring rules, and qualification thresholds. The AI adapts to your unique business model and ideal customer profile.",
    },
    {
      question: "What happens to unqualified leads?",
      answer: "They're stored in your lead database for nurturing campaigns. You can set up automated drip sequences or revisit them when they show increased intent signals.",
    },
    {
      question: "Do you offer phone support?",
      answer: "Pro plans include priority email and chat support. Enterprise customers get dedicated phone support and a Customer Success Manager.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel at any time with no penalties. We offer prorated refunds on annual plans if you cancel within the first 60 days.",
    },
    {
      question: "What CRMs do you integrate with?",
      answer: "We integrate with Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and 50+ other platforms. Custom integrations available on Enterprise plans.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about LeadIQ AI
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
