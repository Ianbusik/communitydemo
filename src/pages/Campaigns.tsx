
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignStats } from "@/components/campaigns/CampaignStats";
import { MessagePreview } from "@/components/campaigns/MessagePreview";
import { ResponseSection } from "@/components/campaigns/ResponseSection";
import { CampaignAnalytics } from "@/components/campaigns/CampaignAnalytics";
import { CampaignActions } from "@/components/campaigns/CampaignActions";

const Campaigns = () => {
  const [selectedCampaign] = useState({
    id: 1,
    title: "To: 73 Members who joined before 02/23/2022",
    recipients: 73,
    joinDate: "02/23/2022",
    sentDate: "Wed, Feb 23, 2022, 2:43 PM",
    message: "Testing link hit metrics pipeline, please click this link. I promise it's safe 😊"
  });

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
                <p className="text-gray-600 mt-1">Manage and create your SMS campaigns</p>
              </div>
              <CampaignActions />
            </div>
          </div>
          
          <CampaignHeader campaign={selectedCampaign} />
          
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6">
              <CampaignStats recipients={selectedCampaign.recipients} />
              <MessagePreview 
                message={selectedCampaign.message}
                sentDate={selectedCampaign.sentDate}
              />
              <ResponseSection />
            </div>
            
            {/* Right Sidebar */}
            <div className="w-80 border-l border-gray-200 p-6">
              <CampaignAnalytics recipients={selectedCampaign.recipients} />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Campaigns;
