import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { MessageSquare, Users, TrendingUp, Calendar } from 'lucide-react';

const Home = () => {
  const campaignData = [
    { date: 'May 26', sent: 1200, delivered: 1180, opened: 850, clicked: 320 },
    { date: 'May 27', sent: 1350, delivered: 1330, opened: 920, clicked: 280 },
    { date: 'May 28', sent: 980, delivered: 950, opened: 600, clicked: 180 },
    { date: 'May 29', sent: 1450, delivered: 1420, opened: 950, clicked: 300 },
    { date: 'May 30', sent: 1650, delivered: 1630, opened: 1100, clicked: 420 },
    { date: 'May 31', sent: 1800, delivered: 1780, opened: 1250, clicked: 450 },
    { date: 'Jun 1', sent: 1900, delivered: 1880, opened: 1300, clicked: 480 },
  ];

  const audienceGrowthData = [
    { month: 'Jan', subscribers: 12500 },
    { month: 'Feb', subscribers: 13200 },
    { month: 'Mar', subscribers: 14100 },
    { month: 'Apr', subscribers: 15300 },
    { month: 'May', subscribers: 16800 },
    { month: 'Jun', subscribers: 18200 },
  ];

  const messageTypesData = [
    { name: 'Promotional', value: 45, color: '#3b82f6' },
    { name: 'Newsletter', value: 30, color: '#10b981' },
    { name: 'Updates', value: 15, color: '#f59e0b' },
    { name: 'Alerts', value: 10, color: '#ef4444' },
  ];

  const recentCampaigns = [
    { id: 1, name: 'Summer Sale Campaign', sent: '2 hours ago', recipients: 15420, openRate: '24.5%' },
    { id: 2, name: 'Product Update Newsletter', sent: '1 day ago', recipients: 12300, openRate: '31.2%' },
    { id: 3, name: 'Welcome Series - Part 3', sent: '2 days ago', recipients: 8750, openRate: '42.1%' },
    { id: 4, name: 'Flash Sale Alert', sent: '3 days ago', recipients: 18600, openRate: '18.7%' },
  ];

  const chartConfig = {
    sent: { label: "Sent", color: "#3b82f6" },
    delivered: { label: "Delivered", color: "#10b981" },
    opened: { label: "Opened", color: "#f59e0b" },
    clicked: { label: "Clicked", color: "#ef4444" },
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Messages</p>
                    <p className="text-2xl font-bold text-gray-900">127,543</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
                    <p className="text-2xl font-bold text-gray-900">18,247</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Open Rate</p>
                    <p className="text-2xl font-bold text-gray-900">24.8%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">89 Campaigns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-80 w-full">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <LineChart data={campaignData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        fontSize={12}
                        tickMargin={8}
                      />
                      <YAxis 
                        fontSize={12}
                        tickMargin={8}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="sent" 
                        stroke="var(--color-sent)" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="delivered" 
                        stroke="var(--color-delivered)" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="opened" 
                        stroke="var(--color-opened)" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="clicked" 
                        stroke="var(--color-clicked)" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Audience Growth Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Audience Growth</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={audienceGrowthData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip />
                      <Bar dataKey="subscribers" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Campaigns */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-500">Sent {campaign.sent} • {campaign.recipients.toLocaleString()} recipients</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{campaign.openRate}</p>
                        <p className="text-xs text-gray-500">Open Rate</p>
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
                        data={messageTypesData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {messageTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Home;
