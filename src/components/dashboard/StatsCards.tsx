
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { stats } from './DashboardData';

export const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${stat.iconBg} text-white shadow-sm`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">{stat.title}</span>
                    <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
                      stat.trend === 'up' 
                        ? 'text-green-700 bg-green-100' 
                        : 'text-red-700 bg-red-100'
                    }`}>
                      {stat.trend === 'up' ? 
                        <ArrowUp className="h-3 w-3 mr-1" /> : 
                        <ArrowDown className="h-3 w-3 mr-1" />
                      }
                      {stat.change}
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  {stat.subtitle && (
                    <p className="text-sm text-gray-600">{stat.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
