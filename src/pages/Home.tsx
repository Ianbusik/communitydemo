
import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Calendar,
  ChevronRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data for visualizations
const campaignPerformanceData = [
  { date: '2024-05-27', sent: 1200, delivered: 1150, opened: 780, clicked: 234 },
  { date: '2024-05-28', sent: 1350, delivered: 1290, opened: 890, clicked: 267 },
  { date: '2024-05-29', sent: 980, delivered: 950, opened: 620, clicked: 186 },
  { date: '2024-05-30', sent: 1450, delivered: 1400, opened: 950, clicked: 315 },
  { date: '2024-05-31', sent: 1680, delivered: 1620, opened: 1100, clicked: 398 },
  { date: '2024-06-01', sent: 1850, delivered: 1780, opened: 1250, clicked: 445 },
  { date: '2024-06-02', sent: 1920, delivered: 1850, opened: 1320, clicked: 478 },
];

const topCampaigns = [
  { name: 'Summer Sale Kickoff', sent: 1920, openRate: 71.3, clickRate: 25.8, status: 'completed' },
  { name: 'Weekly Newsletter #42', sent: 1650, openRate: 68.5, clickRate: 22.1, status: 'completed' },
  { name: 'Product Launch Alert', sent: 1420, openRate: 75.2, clickRate: 31.4, status: 'completed' },
  { name: 'Welcome Series - Day 3', sent: 890, openRate: 82.1, clickRate: 18.7, status: 'active' },
];

const audienceGrowthData = [
  { month: 'Jan', subscribers: 2400 },
  { month: 'Feb', subscribers: 2680 },
  { month: 'Mar', subscribers: 3120 },
  { month: 'Apr', subscribers: 3580 },
  { month: 'May', subscribers: 4200 },
  { month: 'Jun', subscribers: 4850 },
];

const messageTypeData = [
  { name: 'Promotional', value: 45, color: '#3b82f6' },
  { name: 'Transactional', value: 30, color: '#10b981' },
  { name: 'Educational', value: 15, color: '#f59e0b' },
  { name: 'Support', value: 10, color: '#ef4444' },
];

const chartConfig = {
  sent: { label: 'Sent', color: '#3b82f6' },
  delivered: { label: 'Delivered', color: '#10b981' },
  opened: { label: 'Opened', color: '#f59e0b' },
  clicked: { label: 'Clicked', color: '#ef4444' },
  subscribers: { label: 'Subscribers', color: '#8b5cf6' },
};

const Home = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <SidebarTrigger className="mr-4" />
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
                      <p className="mt-1 text-sm text-gray-500">Here's what's happening with your community</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                    All systems operational
                  </Badge>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Messages</p>
                        <p className="text-2xl font-bold text-gray-900">1,920</p>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          +12% from last week
                        </p>
                      </div>
                      <MessageSquare className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
                        <p className="text-2xl font-bold text-gray-900">4,850</p>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          +15% this month
                        </p>
                      </div>
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Open Rate</p>
                        <p className="text-2xl font-bold text-gray-900">71.3%</p>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          +2.1% vs average
                        </p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-yellow-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">SMS Credits</p>
                        <p className="text-2xl font-bold text-gray-900">350</p>
                        <Progress value={35} className="mt-2" />
                        <p className="text-xs text-gray-500 mt-1">35% remaining</p>
                      </div>
                      <Calendar className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Campaign Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance (Last 7 Days)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-80">
                      <LineChart data={campaignPerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="date" 
                          tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="sent" stroke="var(--color-sent)" strokeWidth={2} />
                        <Line type="monotone" dataKey="delivered" stroke="var(--color-delivered)" strokeWidth={2} />
                        <Line type="monotone" dataKey="opened" stroke="var(--color-opened)" strokeWidth={2} />
                        <Line type="monotone" dataKey="clicked" stroke="var(--color-clicked)" strokeWidth={2} />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Audience Growth Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Growth (6 Months)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-80">
                      <BarChart data={audienceGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="subscribers" fill="var(--color-subscribers)" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top Campaigns */}
                <Card className="lg:col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Campaigns</CardTitle>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topCampaigns.map((campaign, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                              <Badge 
                                variant={campaign.status === 'active' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {campaign.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{campaign.sent.toLocaleString()} messages sent</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{campaign.openRate}% open</p>
                            <p className="text-sm text-gray-600">{campaign.clickRate}% click</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Message Types Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Message Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={messageTypeData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {messageTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip 
                            content={({ active, payload }) => {
                              if (active && payload && payload[0]) {
                                const data = payload[0].payload;
                                return (
                                  <div className="bg-white p-2 border rounded shadow">
                                    <p className="font-medium">{data.name}</p>
                                    <p className="text-sm">{data.value}%</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-2">
                      {messageTypeData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span>{item.name}</span>
                          </div>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Home;
