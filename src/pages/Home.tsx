import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { MessageSquare, Users, TrendingUp, Calendar, ArrowUp, ArrowDown, Mail, Bell, Megaphone, FileText, Clock, Target, Eye, MousePointer, Star, AlertCircle, CheckCircle, UserPlus, UserMinus, Award, Zap } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const Home = () => {
  const campaignData = [
    { 
      date: 'May 26', 
      sent: 1200, 
      delivered: 1180, 
      opened: 850, 
      clicked: 320,
      deliveryRate: 98.3,
      openRate: 72.0,
      clickRate: 27.1,
      bounced: 20,
      unsubscribed: 5
    },
    { 
      date: 'May 27', 
      sent: 1350, 
      delivered: 1330, 
      opened: 920, 
      clicked: 280,
      deliveryRate: 98.5,
      openRate: 69.2,
      clickRate: 21.0,
      bounced: 20,
      unsubscribed: 8
    },
    { 
      date: 'May 28', 
      sent: 980, 
      delivered: 950, 
      opened: 600, 
      clicked: 180,
      deliveryRate: 96.9,
      openRate: 63.2,
      clickRate: 30.0,
      bounced: 30,
      unsubscribed: 3
    },
    { 
      date: 'May 29', 
      sent: 1450, 
      delivered: 1420, 
      opened: 950, 
      clicked: 300,
      deliveryRate: 97.9,
      openRate: 66.9,
      clickRate: 31.6,
      bounced: 30,
      unsubscribed: 7
    },
    { 
      date: 'May 30', 
      sent: 1650, 
      delivered: 1630, 
      opened: 1100, 
      clicked: 420,
      deliveryRate: 98.8,
      openRate: 67.5,
      clickRate: 38.2,
      bounced: 20,
      unsubscribed: 4
    },
    { 
      date: 'May 31', 
      sent: 1800, 
      delivered: 1780, 
      opened: 1250, 
      clicked: 450,
      deliveryRate: 98.9,
      openRate: 70.2,
      clickRate: 36.0,
      bounced: 20,
      unsubscribed: 6
    },
    { 
      date: 'Jun 1', 
      sent: 1900, 
      delivered: 1880, 
      opened: 1300, 
      clicked: 480,
      deliveryRate: 98.9,
      openRate: 69.2,
      clickRate: 36.9,
      bounced: 20,
      unsubscribed: 5
    },
  ];

  const audienceGrowthData = [
    { 
      month: 'Jan', 
      subscribers: 12500,
      newSubscribers: 850,
      unsubscribes: 120,
      netGrowth: 730,
      growthRate: 6.2,
      activeUsers: 9800,
      engagementRate: 78.4
    },
    { 
      month: 'Feb', 
      subscribers: 13200,
      newSubscribers: 920,
      unsubscribes: 220,
      netGrowth: 700,
      growthRate: 5.6,
      activeUsers: 10450,
      engagementRate: 79.2
    },
    { 
      month: 'Mar', 
      subscribers: 14100,
      newSubscribers: 1150,
      unsubscribes: 250,
      netGrowth: 900,
      growthRate: 6.8,
      activeUsers: 11200,
      engagementRate: 79.4
    },
    { 
      month: 'Apr', 
      subscribers: 15300,
      newSubscribers: 1420,
      unsubscribes: 220,
      netGrowth: 1200,
      growthRate: 8.5,
      activeUsers: 12150,
      engagementRate: 79.4
    },
    { 
      month: 'May', 
      subscribers: 16800,
      newSubscribers: 1750,
      unsubscribes: 250,
      netGrowth: 1500,
      growthRate: 9.8,
      activeUsers: 13440,
      engagementRate: 80.0
    },
    { 
      month: 'Jun', 
      subscribers: 18200,
      newSubscribers: 1680,
      unsubscribes: 280,
      netGrowth: 1400,
      growthRate: 8.3,
      activeUsers: 14560,
      engagementRate: 80.0
    },
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
    { 
      id: 1, 
      name: 'Summer Sale Campaign', 
      sent: '2 hours ago', 
      recipients: 15420, 
      openRate: '24.5%', 
      clickRate: '8.2%',
      delivered: 15180,
      deliveryRate: '98.4%',
      revenue: '$12,450',
      status: 'completed',
      trend: 'up',
      subject: '🌞 Summer Sale: Up to 50% Off Everything!',
      template: 'Promotional Email',
      segment: 'Active Customers',
      bounces: 240,
      unsubscribes: 18
    },
    { 
      id: 2, 
      name: 'Product Update Newsletter', 
      sent: '1 day ago', 
      recipients: 12300, 
      openRate: '31.2%', 
      clickRate: '12.8%',
      delivered: 12150,
      deliveryRate: '98.8%',
      revenue: '$3,280',
      status: 'completed',
      trend: 'up',
      subject: 'New Features: What\'s Coming This Month',
      template: 'Newsletter',
      segment: 'All Subscribers',
      bounces: 150,
      unsubscribes: 8
    },
    { 
      id: 3, 
      name: 'Welcome Series - Part 3', 
      sent: '2 days ago', 
      recipients: 8750, 
      openRate: '42.1%', 
      clickRate: '18.5%',
      delivered: 8680,
      deliveryRate: '99.2%',
      revenue: '$1,850',
      status: 'completed',
      trend: 'up',
      subject: 'Your Journey Continues: Advanced Tips Inside',
      template: 'Welcome Series',
      segment: 'New Subscribers',
      bounces: 70,
      unsubscribes: 12
    },
    { 
      id: 4, 
      name: 'Flash Sale Alert', 
      sent: '3 days ago', 
      recipients: 18600, 
      openRate: '18.7%', 
      clickRate: '6.4%',
      delivered: 18320,
      deliveryRate: '98.5%',
      revenue: '$8,920',
      status: 'completed',
      trend: 'down',
      subject: '⚡ Flash Sale: 24 Hours Only!',
      template: 'Flash Sale',
      segment: 'VIP Customers',
      bounces: 280,
      unsubscribes: 35
    },
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

  // Calculate performance insights for Campaign Performance widget
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

  // Calculate audience growth insights
  const currentMonth = audienceGrowthData[audienceGrowthData.length - 1];
  const previousMonth = audienceGrowthData[audienceGrowthData.length - 2];
  const totalGrowthLastSixMonths = audienceGrowthData.reduce((sum, month) => sum + month.netGrowth, 0);
  const avgGrowthRate = (audienceGrowthData.reduce((sum, month) => sum + month.growthRate, 0) / audienceGrowthData.length).toFixed(1);
  const avgEngagementRate = (audienceGrowthData.reduce((sum, month) => sum + month.engagementRate, 0) / audienceGrowthData.length).toFixed(1);
  const bestGrowthMonth = audienceGrowthData.reduce((best, current) => 
    current.netGrowth > best.netGrowth ? current : best
  );

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
            {/* Enhanced Campaign Performance Chart */}
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

            {/* Enhanced Audience Growth Chart */}
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
          </div>

          {/* Enhanced Bottom Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Enhanced Recent Campaigns */}
            <Card className="xl:col-span-2 border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">Recent Campaigns</CardTitle>
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg font-medium">
                    Last 4 Campaigns
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-all duration-200">
                      {/* Campaign Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-3 lg:space-y-0 mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900 text-base">{campaign.name}</h3>
                            <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              campaign.status === 'completed' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {campaign.status}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2 font-medium">{campaign.subject}</p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
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
                            <p className="text-lg font-bold text-green-600">{campaign.revenue}</p>
                            <p className="text-xs text-gray-500">Revenue Generated</p>
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
                      
                      {/* Performance Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="text-center bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-sm font-bold text-gray-900">{campaign.deliveryRate}</p>
                          <p className="text-xs text-gray-500">Delivered</p>
                          <p className="text-xs text-gray-400">{campaign.delivered.toLocaleString()}</p>
                        </div>
                        <div className="text-center bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-sm font-bold text-gray-900">{campaign.openRate}</p>
                          <p className="text-xs text-gray-500">Opened</p>
                          <p className="text-xs text-gray-400">{Math.round(campaign.recipients * parseFloat(campaign.openRate) / 100).toLocaleString()}</p>
                        </div>
                        <div className="text-center bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-sm font-bold text-gray-900">{campaign.clickRate}</p>
                          <p className="text-xs text-gray-500">Clicked</p>
                          <p className="text-xs text-gray-400">{Math.round(campaign.recipients * parseFloat(campaign.clickRate) / 100).toLocaleString()}</p>
                        </div>
                        <div className="text-center bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-sm font-bold text-gray-900">{campaign.bounces}</p>
                          <p className="text-xs text-gray-500">Bounces</p>
                          <p className="text-xs text-gray-400">{((campaign.bounces / campaign.recipients) * 100).toFixed(1)}%</p>
                        </div>
                        <div className="text-center bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-sm font-bold text-gray-900">{campaign.unsubscribes}</p>
                          <p className="text-xs text-gray-500">Unsubscribed</p>
                          <p className="text-xs text-gray-400">{((campaign.unsubscribes / campaign.recipients) * 100).toFixed(2)}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Campaign Summary */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Campaign Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-900">
                        {recentCampaigns.reduce((sum, c) => sum + c.recipients, 0).toLocaleString()}
                      </p>
                      <p className="text-xs text-blue-700">Total Recipients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">
                        ${recentCampaigns.reduce((sum, c) => sum + parseFloat(c.revenue.replace('$', '').replace(',', '')), 0).toLocaleString()}
                      </p>
                      <p className="text-xs text-blue-700">Total Revenue</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-orange-600">
                        {(recentCampaigns.reduce((sum, c) => sum + parseFloat(c.openRate), 0) / recentCampaigns.length).toFixed(1)}%
                      </p>
                      <p className="text-xs text-blue-700">Avg Open Rate</p>
                    </div>
                  </div>
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
