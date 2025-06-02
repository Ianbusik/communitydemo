
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignStats } from "@/components/campaigns/CampaignStats";
import { MessagePreview } from "@/components/campaigns/MessagePreview";
import { ResponseSection } from "@/components/campaigns/ResponseSection";
import { CampaignAnalytics } from "@/components/campaigns/CampaignAnalytics";

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
