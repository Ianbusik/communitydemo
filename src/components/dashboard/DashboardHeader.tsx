
import React from 'react';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
      <div className="min-w-0 flex-1">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground text-sm lg:text-base">Welcome back! Here's what's happening with your campaigns.</p>
      </div>
      <div className="text-left lg:text-right flex-shrink-0">
        <div className="text-xs lg:text-sm text-muted-foreground mb-1">Last updated</div>
        <div className="text-xs lg:text-sm font-medium text-foreground">{new Date().toLocaleString()}</div>
      </div>
    </div>
  );
};
