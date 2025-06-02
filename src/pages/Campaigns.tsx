
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignStats } from "@/components/campaigns/CampaignStats";
import { CampaignAnalytics } from "@/components/campaigns/CampaignAnalytics";
import { MessagePreview } from "@/components/campaigns/MessagePreview";
import { ResponseSection } from "@/components/campaigns/ResponseSection";
import { CampaignActions } from "@/components/campaigns/CampaignActions";
import { UniversalSearch } from "@/components/UniversalSearch";
import { FilterToolbar } from "@/components/FilterToolbar";
import { EmptyState } from "@/components/EmptyState";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Megaphone, Plus } from "lucide-react";

const Campaigns = () => {
  useDocumentTitle();
  const [campaigns] = useState([
    { id: 1, name: 'Welcome Series', status: 'active' },
    { id: 2, name: 'Monthly Newsletter', status: 'paused' },
  ]);

  const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleStatusFilter = (statuses: string[]) => {
    if (statuses.length === 0) {
      setFilteredCampaigns(campaigns);
    } else {
      setFilteredCampaigns(campaigns.filter(c => statuses.includes(c.status)));
    }
  };

  const handleSort = (field: string, direction: 'asc' | 'desc') => {
    setSortField(field);
    setSortDirection(direction);
    // Implement sorting logic here
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <UniversalSearch />
            <ThemeToggle />
          </div>

          {/* Filter Toolbar */}
          <FilterToolbar
            onStatusFilter={handleStatusFilter}
            onSortChange={handleSort}
            sortField={sortField}
            sortDirection={sortDirection}
            sortOptions={[
              { value: 'name', label: 'Name' },
              { value: 'created', label: 'Created Date' },
              { value: 'status', label: 'Status' },
              { value: 'performance', label: 'Performance' }
            ]}
          />

          <div className="p-6 lg:p-8 space-y-6 lg:space-y-8">
            {filteredCampaigns.length === 0 ? (
              <EmptyState
                icon={<Megaphone className="h-12 w-12" />}
                title="No campaigns found"
                description="Get started by creating your first campaign to engage with your community members."
                actionLabel="Create Campaign"
                onAction={() => console.log('Create campaign')}
              />
            ) : (
              <>
                <CampaignHeader />
                <CampaignStats />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                  <CampaignAnalytics />
                  <MessagePreview />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                  <ResponseSection />
                  <CampaignActions />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Campaigns;
