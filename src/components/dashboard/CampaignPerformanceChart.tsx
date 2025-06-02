
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Mail, Eye, MousePointer, Star, TrendingUp, CheckCircle, Target } from 'lucide-react';
import { campaignData, chartConfig } from './DashboardData';

export const CampaignPerformanceChart: React.FC = () => {
  // Calculate performance insights
  const totalSent = campaignData.reduce((sum, day) => sum + day.sent, 0);
  const totalDelivered = campaignData.reduce((sum, day) => sum + day.delivered, 0);
  const totalOpened = campaignData.reduce((sum, day) => sum + day.opened, 0);
  const totalClicked = campaignData.reduce((sum, day) => sum + day.clicked, 0);
  
  const avgDeliveryRate = ((totalDelivered / totalSent) * 100).toFixed(1);
  const avgOpenRate = ((totalOpened / totalDelivered) * 100).toFixed(1);
  const avgClickRate = ((totalClicked / totalOpened) * 100).toFixed(1);

  const bestPerformingDay = campaignData.reduce((best, current) => 
    current.openRate > best.openRate ? current : best
  );

  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
          <CardTitle className="text-xl font-semibold text-gray-900">Campaign Performance</CardTitle>
          <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">Last 7 Days</div>
        </div>
        
        {/* Performance Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
            <div className="flex items-center space-x-2 mb-1">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">Avg Delivery</span>
            </div>
            <p className="text-lg font-bold text-blue-900">{avgDeliveryRate}%</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-100">
            <div className="flex items-center space-x-2 mb-1">
              <Eye className="h-4 w-4 text-green-600" />
              <span className="text-xs font-medium text-green-800">Avg Open</span>
            </div>
            <p className="text-lg font-bold text-green-900">{avgOpenRate}%</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
            <div className="flex items-center space-x-2 mb-1">
              <MousePointer className="h-4 w-4 text-orange-600" />
              <span className="text-xs font-medium text-orange-800">Avg Click</span>
            </div>
            <p className="text-lg font-bold text-orange-900">{avgClickRate}%</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <div className="flex items-center space-x-2 mb-1">
              <Star className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-medium text-purple-800">Best Day</span>
            </div>
            <p className="text-sm font-bold text-purple-900">{bestPerformingDay.date}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="h-80 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <LineChart data={campaignData} margin={{ top: 20, right: 20, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                fontSize={11}
                tickMargin={8}
                stroke="#64748b"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                fontSize={11}
                tickMargin={8}
                stroke="#64748b"
                width={50}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="sent" 
                stroke="var(--color-sent)" 
                strokeWidth={2.5}
                dot={{ r: 4, strokeWidth: 2, fill: "white" }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="delivered" 
                stroke="var(--color-delivered)" 
                strokeWidth={2.5}
                dot={{ r: 4, strokeWidth: 2, fill: "white" }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="opened" 
                stroke="var(--color-opened)" 
                strokeWidth={2.5}
                dot={{ r: 4, strokeWidth: 2, fill: "white" }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="clicked" 
                stroke="var(--color-clicked)" 
                strokeWidth={2.5}
                dot={{ r: 4, strokeWidth: 2, fill: "white" }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
        
        {/* Quick Insights */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Insights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span>Total messages sent: {totalSent.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 text-blue-500" />
              <span>Delivery rate consistently above 96%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-3 w-3 text-orange-500" />
              <span>Open rates trending upward</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-3 w-3 text-purple-500" />
              <span>Click-through rates above industry average</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
