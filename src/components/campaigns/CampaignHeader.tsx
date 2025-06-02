
import React from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CampaignHeaderProps {
  campaign: {
    title: string;
    recipients: number;
    joinDate: string;
  };
}

export const CampaignHeader: React.FC<CampaignHeaderProps> = ({ campaign }) => {
  return (
    <div className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-lg font-medium text-gray-900">
              {campaign.title}
            </h1>
          </div>
        </div>
        
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
