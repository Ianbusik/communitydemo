
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Sparkles, Send } from "lucide-react";
import { AIPromoBuilderModal } from "./AIPromoBuilderModal";

export const CampaignActions: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const handleAISend = (message: string, audience: string, images: string[]) => {
    console.log("AI Promo sent:", {
      message,
      audience,
      images,
      timestamp: new Date().toISOString()
    });
    // Here you would integrate with your existing campaign sending logic
    // This would typically involve:
    // 1. Creating the campaign in your backend
    // 2. Uploading the selected images
    // 3. Sending to the selected audience
    // 4. Tracking campaign metrics
  };

  const handleNewCampaign = () => {
    console.log("Creating new manual campaign");
    // Here you would open your existing campaign creation flow
  };

  return (
    <>
      <div className="flex gap-3">
        <Button 
          onClick={handleNewCampaign}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Campaign
        </Button>
        
        <Button 
          onClick={() => setIsAIModalOpen(true)}
          variant="outline"
          className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
        >
          <Sparkles className="h-4 w-4" />
          AI Promo Builder (β)
        </Button>
      </div>

      <AIPromoBuilderModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
        onSend={handleAISend}
      />
    </>
  );
};
