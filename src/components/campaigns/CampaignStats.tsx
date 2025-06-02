
import React from 'react';
import { Card } from "@/components/ui/card";

interface CampaignStatsProps {
  recipients: number;
}

export const CampaignStats: React.FC<CampaignStatsProps> = ({ recipients }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{recipients}</div>
        <div className="text-sm text-gray-600">Recipients</div>
      </Card>
      
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600">0</div>
        <div className="text-sm text-gray-600">Delivered</div>
      </Card>
      
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-orange-600">0</div>
        <div className="text-sm text-gray-600">Opened</div>
      </Card>
      
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-red-600">0</div>
        <div className="text-sm text-gray-600">Clicked</div>
      </Card>
    </div>
  );
};
