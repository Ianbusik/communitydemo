
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";

interface AIPromoBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
}

export const AIPromoBuilderModal: React.FC<AIPromoBuilderModalProps> = ({
  isOpen,
  onClose,
  onSend,
}) => {
  const [goal, setGoal] = useState<string>("Sale");
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftText, setDraftText] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  const generateDraft = async () => {
    setIsGenerating(true);
    console.log(`Generating AI promo for goal: ${goal}`);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI-generated content based on goal
    const mockDrafts = {
      Sale: "🔥 Flash Sale! 30% off everything today only. Use code SAVE30 at checkout. Limited time! <FirstName>",
      Event: "You're invited! Join us this Saturday 7PM for an exclusive member event. RSVP now <FirstName>!",
      "Content Share": "New blog post is live! 5 tips that changed everything for our community. Check it out <FirstName> ✨"
    };
    
    const draft = mockDrafts[goal as keyof typeof mockDrafts] || mockDrafts.Sale;
    setDraftText(draft);
    setHasGenerated(true);
    setIsGenerating(false);
  };

  const handleSend = () => {
    const finalText = draftText + "\n\nText STOP to opt out";
    console.log("Sending AI promo:", finalText);
    onSend(finalText);
    onClose();
    resetModal();
  };

  const resetModal = () => {
    setGoal("Sale");
    setDraftText("");
    setHasGenerated(false);
    setIsGenerating(false);
  };

  const charCount = draftText.length;
  const isOverLimit = charCount > 140;
  const previewText = draftText.replace('<FirstName>', 'John');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            AI Promo Builder (β)
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Step 1: Choose Goal</label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sale">Sale</SelectItem>
                  <SelectItem value="Event">Event</SelectItem>
                  <SelectItem value="Content Share">Content Share</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Step 2: Generate</label>
              <Button 
                onClick={generateDraft}
                disabled={isGenerating}
                className="w-full h-14 bg-black hover:bg-gray-800 text-white"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Draft
                  </>
                )}
              </Button>
            </div>

            {hasGenerated && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Edit Message</label>
                  <span className={`text-sm ${isOverLimit ? 'text-red-500' : 'text-gray-500'}`}>
                    {charCount}/140
                  </span>
                </div>
                <Textarea
                  value={draftText}
                  onChange={(e) => setDraftText(e.target.value)}
                  placeholder="Your AI-generated message will appear here..."
                  className={`min-h-24 ${isOverLimit ? 'border-red-500' : ''}`}
                />
                {isOverLimit && (
                  <p className="text-red-500 text-xs mt-1">
                    Message exceeds 140 character limit
                  </p>
                )}
              </div>
            )}

            {hasGenerated && (
              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={resetModal} className="flex-1">
                  Start Over
                </Button>
                <Button 
                  onClick={handleSend}
                  disabled={isOverLimit || !draftText.trim()}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Send Now
                </Button>
              </div>
            )}
          </div>

          {/* Right Panel - Phone Preview */}
          <div className="lg:border-l lg:pl-6">
            <label className="block text-sm font-medium mb-2">Live Preview</label>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="bg-white rounded-lg shadow-sm border max-w-xs mx-auto">
                <div className="bg-gray-100 px-4 py-2 rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Community</span>
                  </div>
                </div>
                <div className="p-4 min-h-24">
                  {previewText ? (
                    <div className="space-y-2">
                      <p className="text-sm">{previewText}</p>
                      <p className="text-xs text-gray-500 border-t pt-2">
                        Text STOP to opt out
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">
                      Generate a message to see preview
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
