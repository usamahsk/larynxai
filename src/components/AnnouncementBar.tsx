import { X, Sparkles } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-accent text-background py-2 px-4 animate-fade-in">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <Sparkles className="w-4 h-4 flex-shrink-0" />
        <span className="text-center">
          <strong>New:</strong> Voice Agent now available — qualify leads over the phone with AI
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 p-1 hover:bg-background/20 rounded transition-smooth flex-shrink-0"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
