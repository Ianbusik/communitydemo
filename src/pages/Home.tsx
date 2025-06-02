
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { CampaignPerformanceChart } from "@/components/dashboard/CampaignPerformanceChart";
import { AudienceGrowthChart } from "@/components/dashboard/AudienceGrowthChart";
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns";
import { MessageTypesChart } from "@/components/dashboard/MessageTypesChart";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UniversalSearch } from "@/components/UniversalSearch";
import { OnboardingChecklist } from "@/components/OnboardingChecklist";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle();
  const [showOnboarding, setShowOnboarding] = React.useState(true);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8 overflow-auto">
          {/* Header with Search and Theme Toggle */}
          <div className="flex items-center justify-between">
            <UniversalSearch />
            <ThemeToggle />
          </div>

          {/* Onboarding Checklist */}
          {showOnboarding && (
            <OnboardingChecklist onDismiss={() => setShowOnboarding(false)} />
          )}

          {/* Header Section */}
          <DashboardHeader />

          {/* Enhanced Stats Cards */}
          <StatsCards />

          {/* Enhanced Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {/* Enhanced Campaign Performance Chart */}
            <CampaignPerformanceChart />

            {/* Enhanced Audience Growth Chart */}
            <AudienceGrowthChart />
          </div>

          {/* Enhanced Bottom Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Enhanced Recent Campaigns */}
            <RecentCampaigns />

            {/* Enhanced Message Types Distribution */}
            <MessageTypesChart />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Home;
