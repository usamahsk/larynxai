import { MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl glow-primary hover:scale-110 transition-smooth animate-float"
        >
          <MessageSquare className="w-6 h-6 text-background" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] glass-panel-strong rounded-2xl shadow-2xl glow-primary animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-background" />
              </div>
              <div>
                <div className="font-semibold">LeadIQ Qualification Bot</div>
                <div className="text-xs text-muted-foreground">Usually replies instantly</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-accent transition-smooth flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-6 h-[calc(100%-140px)] overflow-y-auto space-y-4">
            <div className="glass-panel p-4 rounded-xl max-w-[85%]">
              <p className="text-sm">
                👋 Hi! I'm the LeadIQ qualification bot. I can help you understand how our AI agents can qualify your leads 24/7.
              </p>
            </div>
            <div className="glass-panel p-4 rounded-xl max-w-[85%]">
              <p className="text-sm">What would you like to know about?</p>
              <div className="mt-3 space-y-2">
                <Button variant="glass" size="sm" className="w-full justify-start text-xs">
                  How does AI scoring work?
                </Button>
                <Button variant="glass" size="sm" className="w-full justify-start text-xs">
                  Pricing & plans
                </Button>
                <Button variant="glass" size="sm" className="w-full justify-start text-xs">
                  Integration options
                </Button>
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-background/95 backdrop-blur-sm rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="icon" variant="hero">
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatBot;
