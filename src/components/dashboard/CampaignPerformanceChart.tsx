
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Mail, Eye, MousePointer, Star, TrendingUp, CheckCircle, Target, BarChart3 } from 'lucide-react';
import { campaignData, chartConfig } from './DashboardData';
import { Button } from "@/components/ui/button";

export const CampaignPerformanceChart: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState({
    sent: true,
    delivered: true,
    opened: true,
    clicked: true
  });

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

  const toggleLine = (lineKey: keyof typeof visibleLines) => {
    setVisibleLines(prev => ({
      ...prev,
      [lineKey]: !prev[lineKey]
    }));
  };

  // Enhanced tooltip content
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <div className="space-y-2">
            {payload.map((entry: any) => (
              <div key={entry.dataKey} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-gray-600">{entry.name}:</span>
                </div>
                <span className="font-medium">{entry.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 mt-3 pt-3 space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Delivery Rate:</span>
              <span>{((data.delivered / data.sent) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Open Rate:</span>
              <span>{((data.opened / data.delivered) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Click Rate:</span>
              <span>{((data.clicked / data.opened) * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-xl font-semibold text-gray-900">Campaign Performance</CardTitle>
          </div>
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

        {/* Interactive Legend / Toggle Controls */}
        <div className="flex flex-wrap gap-2 mt-4 p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium text-gray-700 mr-2">Show:</span>
          {Object.entries(chartConfig).map(([key, config]) => (
            <Button
              key={key}
              variant={visibleLines[key as keyof typeof visibleLines] ? "default" : "outline"}
              size="sm"
              className="text-xs px-3 py-1 h-7"
              onClick={() => toggleLine(key as keyof typeof visibleLines)}
            >
              <div 
                className="w-2 h-2 rounded-full mr-2" 
                style={{ backgroundColor: visibleLines[key as keyof typeof visibleLines] ? config.color : '#d1d5db' }}
              />
              {config.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="h-80 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <LineChart data={campaignData} margin={{ top: 20, right: 20, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                fontSize={12}
                tickMargin={8}
                stroke="#64748b"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                fontSize={12}
                tickMargin={8}
                stroke="#64748b"
                width={60}
              />
              <ChartTooltip content={<CustomTooltip />} />
              {visibleLines.sent && (
                <Line 
                  type="monotone" 
                  dataKey="sent" 
                  stroke="var(--color-sent)" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "white" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                />
              )}
              {visibleLines.delivered && (
                <Line 
                  type="monotone" 
                  dataKey="delivered" 
                  stroke="var(--color-delivered)" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "white" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                />
              )}
              {visibleLines.opened && (
                <Line 
                  type="monotone" 
                  dataKey="opened" 
                  stroke="var(--color-opened)" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "white" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                />
              )}
              {visibleLines.clicked && (
                <Line 
                  type="monotone" 
                  dataKey="clicked" 
                  stroke="var(--color-clicked)" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "white" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                />
              )}
            </LineChart>
          </ChartContainer>
        </div>
        
        {/* Enhanced Quick Insights */}
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-600" />
            Performance Insights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>Total messages sent: <strong>{totalSent.toLocaleString()}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Delivery rate: <strong>{avgDeliveryRate}%</strong> (Excellent)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-orange-500" />
              <span>Open rate: <strong>{avgOpenRate}%</strong> (Above average)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MousePointer className="h-4 w-4 text-purple-500" />
              <span>Click rate: <strong>{avgClickRate}%</strong> (Strong performance)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
