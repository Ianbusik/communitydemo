import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { MessageSquare, Users, TrendingUp, Calendar, ArrowUp, ArrowDown, Mail, Bell, Megaphone, FileText } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

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
    { 
      name: 'Promotional', 
      value: 45, 
      color: '#3b82f6',
      count: 127,
      trend: 'up',
      trendValue: '+12%',
      description: 'Sales & marketing campaigns',
      icon: Megaphone
    },
    { 
      name: 'Newsletter', 
      value: 30, 
      color: '#10b981',
      count: 85,
      trend: 'up',
      trendValue: '+8%',
      description: 'Regular content updates',
      icon: FileText
    },
    { 
      name: 'Updates', 
      value: 15, 
      color: '#f59e0b',
      count: 42,
      trend: 'down',
      trendValue: '-3%',
      description: 'Product & service updates',
      icon: Bell
    },
    { 
      name: 'Alerts', 
      value: 10, 
      color: '#ef4444',
      count: 28,
      trend: 'up',
      trendValue: '+5%',
      description: 'Urgent notifications',
      icon: Mail
    },
  ];

  const recentCampaigns = [
    { id: 1, name: 'Summer Sale Campaign', sent: '2 hours ago', recipients: 15420, openRate: '24.5%', trend: 'up' },
    { id: 2, name: 'Product Update Newsletter', sent: '1 day ago', recipients: 12300, openRate: '31.2%', trend: 'up' },
    { id: 3, name: 'Welcome Series - Part 3', sent: '2 days ago', recipients: 8750, openRate: '42.1%', trend: 'up' },
    { id: 4, name: 'Flash Sale Alert', sent: '3 days ago', recipients: 18600, openRate: '18.7%', trend: 'down' },
  ];

  const chartConfig = {
    sent: { label: "Sent", color: "#3b82f6" },
    delivered: { label: "Delivered", color: "#10b981" },
    opened: { label: "Opened", color: "#f59e0b" },
    clicked: { label: "Clicked", color: "#ef4444" },
  };

  const stats = [
    {
      title: "Total Messages",
      value: "127,543",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500",
      change: "+12.5%",
      trend: "up"
    },
    {
      title: "Active Subscribers", 
      value: "18,247",
      icon: Users,
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500",
      change: "+8.3%",
      trend: "up"
    },
    {
      title: "Open Rate",
      value: "24.8%", 
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-500",
      change: "+2.1%",
      trend: "up"
    },
    {
      title: "This Month",
      value: "89",
      subtitle: "Campaigns",
      icon: Calendar,
      color: "from-purple-500 to-purple-600", 
      iconBg: "bg-purple-500",
      change: "+15.2%",
      trend: "up"
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8 overflow-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600 text-sm lg:text-base">Welcome back! Here's what's happening with your campaigns.</p>
            </div>
            <div className="text-left lg:text-right flex-shrink-0">
              <div className="text-xs lg:text-sm text-gray-500 mb-1">Last updated</div>
              <div className="text-xs lg:text-sm font-medium text-gray-900">{new Date().toLocaleString()}</div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
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

          {/* Enhanced Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {/* Campaign Performance Chart */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <CardTitle className="text-xl font-semibold text-gray-900">Campaign Performance</CardTitle>
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">Last 7 Days</div>
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
              </CardContent>
            </Card>

            {/* Audience Growth Chart */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <CardTitle className="text-xl font-semibold text-gray-900">Audience Growth</CardTitle>
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">Monthly</div>
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
                      <ChartTooltip />
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
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Bottom Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Recent Campaigns */}
            <Card className="xl:col-span-2 border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">Recent Campaigns</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-sm transition-all duration-200 space-y-3 sm:space-y-0">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base">{campaign.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            Sent {campaign.sent}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span>{campaign.recipients.toLocaleString()} recipients</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end space-x-4">
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">{campaign.openRate}</p>
                          <p className="text-xs text-gray-500">Open Rate</p>
                        </div>
                        <div className={`p-2 rounded-full ${
                          campaign.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {campaign.trend === 'up' ? 
                            <ArrowUp className="h-4 w-4" /> : 
                            <ArrowDown className="h-4 w-4" />
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Message Types Distribution */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">Message Types</CardTitle>
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">
                    This Month
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="h-48 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={messageTypesData}
                        cx="50%"
                        cy="50%"
                        outerRadius="75%"
                        innerRadius="40%"
                        dataKey="value"
                        stroke="white"
                        strokeWidth={3}
                      >
                        {messageTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div 
                                    className="w-3 h-3 rounded-full" 
                                    style={{ backgroundColor: data.color }}
                                  />
                                  <span className="font-semibold text-gray-900">{data.name}</span>
                                </div>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div>{data.value}% of total messages</div>
                                  <div>{data.count} messages sent</div>
                                  <div className="text-xs text-gray-500">{data.description}</div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Enhanced Legend with More Details */}
                <div className="space-y-4">
                  {messageTypesData.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            />
                            <item.icon className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900">{item.name}</span>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                            <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                              item.trend === 'up' 
                                ? 'text-green-700 bg-green-100' 
                                : 'text-red-700 bg-red-100'
                            }`}>
                              {item.trend === 'up' ? 
                                <ArrowUp className="h-3 w-3 mr-1" /> : 
                                <ArrowDown className="h-3 w-3 mr-1" />
                              }
                              {item.trendValue}
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{item.count} messages</p>
                        </div>
                      </div>
                      <Progress 
                        value={item.value} 
                        className="h-2 bg-gray-100"
                        style={{
                          '--progress-foreground': item.color
                        } as React.CSSProperties}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Summary Stats */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">282</p>
                      <p className="text-xs text-gray-500">Total Messages</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">+7.2%</p>
                      <p className="text-xs text-gray-500">vs Last Month</p>
                    </div>
                  </div>
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
