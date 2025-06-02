
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartTooltip } from "@/components/ui/chart";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { UserPlus, TrendingUp, Zap, Award, Users } from 'lucide-react';
import { audienceGrowthData } from './DashboardData';

export const AudienceGrowthChart: React.FC = () => {
  const currentMonth = audienceGrowthData[audienceGrowthData.length - 1];
  const previousMonth = audienceGrowthData[audienceGrowthData.length - 2];
  const totalGrowthLastSixMonths = audienceGrowthData.reduce((sum, month) => sum + month.netGrowth, 0);
  const avgGrowthRate = (audienceGrowthData.reduce((sum, month) => sum + month.growthRate, 0) / audienceGrowthData.length).toFixed(1);
  const avgEngagementRate = (audienceGrowthData.reduce((sum, month) => sum + month.engagementRate, 0) / audienceGrowthData.length).toFixed(1);
  const bestGrowthMonth = audienceGrowthData.reduce((best, current) => 
    current.netGrowth > best.netGrowth ? current : best
  );

  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
          <CardTitle className="text-xl font-semibold text-gray-900">Audience Growth</CardTitle>
          <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">Last 6 Months</div>
        </div>
        
        {/* Growth Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          <div className="bg-green-50 rounded-lg p-3 border border-green-100">
            <div className="flex items-center space-x-2 mb-1">
              <UserPlus className="h-4 w-4 text-green-600" />
              <span className="text-xs font-medium text-green-800">New This Month</span>
            </div>
            <p className="text-lg font-bold text-green-900">{currentMonth.newSubscribers.toLocaleString()}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">Growth Rate</span>
            </div>
            <p className="text-lg font-bold text-blue-900">{currentMonth.growthRate}%</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <div className="flex items-center space-x-2 mb-1">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-medium text-purple-800">Engagement</span>
            </div>
            <p className="text-lg font-bold text-purple-900">{currentMonth.engagementRate}%</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
            <div className="flex items-center space-x-2 mb-1">
              <Award className="h-4 w-4 text-orange-600" />
              <span className="text-xs font-medium text-orange-800">Best Month</span>
            </div>
            <p className="text-sm font-bold text-orange-900">{bestGrowthMonth.month}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={audienceGrowthData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b" 
                fontSize={11}
                tickMargin={8}
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={11}
                tickMargin={8}
                width={60}
              />
              <ChartTooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-2">{label} Growth</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Subscribers:</span>
                            <span className="font-semibold">{data.subscribers.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-600">New Subscribers:</span>
                            <span className="font-semibold text-green-600">+{data.newSubscribers.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-red-600">Unsubscribes:</span>
                            <span className="font-semibold text-red-600">-{data.unsubscribes}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-600">Net Growth:</span>
                            <span className="font-semibold text-blue-600">+{data.netGrowth}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-600">Engagement Rate:</span>
                            <span className="font-semibold text-purple-600">{data.engagementRate}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar 
                dataKey="subscribers" 
                fill="url(#barGradient)" 
                radius={[6, 6, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Growth Metrics */}
        <div className="mt-4 space-y-4">
          {/* Monthly Comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-green-900">This Month</h4>
                <div className="flex items-center text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                  <UserPlus className="h-3 w-3 mr-1" />
                  +{currentMonth.netGrowth}
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700">New:</span>
                  <span className="font-semibold text-green-900">+{currentMonth.newSubscribers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Churned:</span>
                  <span className="font-semibold text-green-900">-{currentMonth.unsubscribes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Growth Rate:</span>
                  <span className="font-semibold text-green-900">{currentMonth.growthRate}%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-blue-900">6-Month Avg</h4>
                <div className="flex items-center text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {avgGrowthRate}%
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Total Growth:</span>
                  <span className="font-semibold text-blue-900">+{totalGrowthLastSixMonths.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Avg Engagement:</span>
                  <span className="font-semibold text-blue-900">{avgEngagementRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Active Users:</span>
                  <span className="font-semibold text-blue-900">{currentMonth.activeUsers.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Growth Trend Analysis */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Growth Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span>Growth rate increased {(currentMonth.growthRate - previousMonth.growthRate) > 0 ? '+' : ''}{(currentMonth.growthRate - previousMonth.growthRate).toFixed(1)}% vs last month</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-3 w-3 text-blue-500" />
                <span>Active subscriber ratio: {((currentMonth.activeUsers / currentMonth.subscribers) * 100).toFixed(1)}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 text-purple-500" />
                <span>Best growth: {bestGrowthMonth.month} (+{bestGrowthMonth.netGrowth})</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-3 w-3 text-orange-500" />
                <span>Engagement trending {currentMonth.engagementRate > previousMonth.engagementRate ? 'up' : 'down'}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
