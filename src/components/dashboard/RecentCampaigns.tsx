
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Target, ArrowUp, ArrowDown, CheckCircle } from 'lucide-react';
import { recentCampaigns } from './DashboardData';

export const RecentCampaigns: React.FC = () => {
  return (
    <Card className="xl:col-span-2 border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">Recent Campaigns</CardTitle>
          <div className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-lg font-medium">
            Last 4 Campaigns
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          {recentCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-muted/50 border border-border rounded-xl p-5 hover:shadow-sm transition-all duration-200">
              {/* Campaign Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-3 lg:space-y-0 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-foreground text-base">{campaign.name}</h3>
                    <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'completed' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {campaign.status}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">{campaign.subject}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      Sent {campaign.sent}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {campaign.recipients.toLocaleString()} recipients
                    </span>
                    <span className="flex items-center">
                      <Target className="h-3 w-3 mr-1" />
                      {campaign.segment}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">{campaign.revenue}</p>
                    <p className="text-xs text-muted-foreground">Revenue Generated</p>
                  </div>
                  <div className={`p-2 rounded-full ${
                    campaign.trend === 'up' 
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {campaign.trend === 'up' ? 
                      <ArrowUp className="h-4 w-4" /> : 
                      <ArrowDown className="h-4 w-4" />
                    }
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center bg-card rounded-lg p-3 border border-border">
                  <p className="text-sm font-bold text-foreground">{campaign.deliveryRate}</p>
                  <p className="text-xs text-muted-foreground">Delivered</p>
                  <p className="text-xs text-muted-foreground/80">{campaign.delivered.toLocaleString()}</p>
                </div>
                <div className="text-center bg-card rounded-lg p-3 border border-border">
                  <p className="text-sm font-bold text-foreground">{campaign.openRate}</p>
                  <p className="text-xs text-muted-foreground">Opened</p>
                  <p className="text-xs text-muted-foreground/80">{Math.round(campaign.recipients * parseFloat(campaign.openRate) / 100).toLocaleString()}</p>
                </div>
                <div className="text-center bg-card rounded-lg p-3 border border-border">
                  <p className="text-sm font-bold text-foreground">{campaign.clickRate}</p>
                  <p className="text-xs text-muted-foreground">Clicked</p>
                  <p className="text-xs text-muted-foreground/80">{Math.round(campaign.recipients * parseFloat(campaign.clickRate) / 100).toLocaleString()}</p>
                </div>
                <div className="text-center bg-card rounded-lg p-3 border border-border">
                  <p className="text-sm font-bold text-foreground">{campaign.bounces}</p>
                  <p className="text-xs text-muted-foreground">Bounces</p>
                  <p className="text-xs text-muted-foreground/80">{((campaign.bounces / campaign.recipients) * 100).toFixed(1)}%</p>
                </div>
                <div className="text-center bg-card rounded-lg p-3 border border-border">
                  <p className="text-sm font-bold text-foreground">{campaign.unsubscribes}</p>
                  <p className="text-xs text-muted-foreground">Unsubscribed</p>
                  <p className="text-xs text-muted-foreground/80">{((campaign.unsubscribes / campaign.recipients) * 100).toFixed(2)}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Campaign Summary */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-900/50">
          <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">Campaign Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-lg font-bold text-blue-900 dark:text-blue-100">
                {recentCampaigns.reduce((sum, c) => sum + c.recipients, 0).toLocaleString()}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">Total Recipients</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-green-600 dark:text-green-400">
                ${recentCampaigns.reduce((sum, c) => sum + parseFloat(c.revenue.replace('$', '').replace(',', '')), 0).toLocaleString()}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">Total Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                {(recentCampaigns.reduce((sum, c) => sum + parseFloat(c.openRate), 0) / recentCampaigns.length).toFixed(1)}%
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">Avg Open Rate</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
