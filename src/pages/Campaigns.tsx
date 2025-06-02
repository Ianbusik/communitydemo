
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { FilterToolbar } from "@/components/FilterToolbar";
import { EmptyState } from "@/components/EmptyState";
import { HelpTooltip } from "@/components/HelpTooltip";
import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignStats } from "@/components/campaigns/CampaignStats";
import { CampaignAnalytics } from "@/components/campaigns/CampaignAnalytics";
import { MessagePreview } from "@/components/campaigns/MessagePreview";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UniversalSearch } from "@/components/UniversalSearch";
import { Megaphone, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Campaigns = () => {
  useDocumentTitle("Campaigns - Manage your marketing campaigns");
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Mock campaign data
  const mockCampaign = {
    title: "Welcome Campaign",
    recipients: 1234,
    joinDate: "January 15, 2024"
  };

  const mockMessage = {
    message: "Welcome to our community! We're excited to have you join us.",
    sentDate: "January 15, 2024 at 2:30 PM"
  };

  const handleCreateCampaign = () => {
    setSelectedCampaign(mockCampaign);
  };

  if (selectedCampaign) {
    return (
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex-1 overflow-auto">
            <CampaignHeader campaign={mockCampaign} />
            
            <div className="p-6 space-y-6">
              <CampaignStats recipients={mockCampaign.recipients} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CampaignAnalytics recipients={mockCampaign.recipients} />
                <MessagePreview 
                  message={mockMessage.message} 
                  sentDate={mockMessage.sentDate} 
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8 overflow-auto">
          {/* Header with Search and Theme Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold">Campaigns</h1>
              <HelpTooltip content="Create and manage your marketing campaigns to engage with your community members effectively." />
            </div>
            <div className="flex items-center gap-4">
              <UniversalSearch />
              <ThemeToggle />
            </div>
          </div>

          {/* Filter Toolbar */}
          <FilterToolbar />

          {/* Empty State */}
          <EmptyState
            icon={<Megaphone className="h-12 w-12" />}
            title="No campaigns yet"
            description="Create your first campaign to start engaging with your community members through targeted messaging."
            actionLabel="Create Campaign"
            onAction={handleCreateCampaign}
          />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Campaigns;
