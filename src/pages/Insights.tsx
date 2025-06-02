import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Users, MessageSquare, Clock, Target } from "lucide-react";
import { DateRange } from "react-day-picker";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Insights = () => {
  useDocumentTitle();
  
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>();
  
  const [engagementData] = useState([
    { month: 'Jan', messages: 4200, responses: 3100, opens: 3800 },
    { month: 'Feb', messages: 3800, responses: 2900, opens: 3500 },
    { month: 'Mar', messages: 5200, responses: 4100, opens: 4800 },
    { month: 'Apr', messages: 4800, responses: 3800, opens: 4400 },
    { month: 'May', messages: 6200, responses: 5100, opens: 5800 },
    { month: 'Jun', messages: 7100, responses: 5800, opens: 6600 }
  ]);

  const [audienceData] = useState([
    { age: '18-24', count: 1240, percentage: 28 },
    { age: '25-34', count: 1890, percentage: 42 },
    { age: '35-44', count: 890, percentage: 20 },
    { age: '45-54', count: 340, percentage: 8 },
    { age: '55+', count: 140, percentage: 2 }
  ]);

  const [campaignPerformance] = useState([
    { name: 'Welcome Series', sent: 2400, delivered: 2280, opened: 1824, clicked: 912 },
    { name: 'Product Updates', sent: 1800, delivered: 1710, opened: 1368, clicked: 547 },
    { name: 'Promotions', sent: 3200, delivered: 3040, opened: 2432, clicked: 1216 },
    { name: 'Newsletters', sent: 2800, delivered: 2660, opened: 1862, clicked: 665 }
  ]);

  const [deviceData] = useState([
    { name: 'Mobile', value: 68, color: '#3b82f6' },
    { name: 'Desktop', value: 24, color: '#10b981' },
    { name: 'Tablet', value: 8, color: '#f59e0b' }
  ]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Insights</h1>
              <p className="text-muted-foreground mt-1">Analyze your community engagement and performance</p>
            </div>
            <DateRangePicker 
              date={selectedDateRange}
              onDateChange={setSelectedDateRange}
            />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" role="region" aria-label="Key performance metrics">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Engagement</p>
                    <p className="text-2xl font-bold text-foreground">94.2%</p>
                  </div>
                  <div className="flex items-center text-green-600" aria-label="5.2% increase">
                    <TrendingUp className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span className="text-xs">+5.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Response Rate</p>
                    <p className="text-2xl font-bold text-foreground">78.5%</p>
                  </div>
                  <div className="flex items-center text-green-600" aria-label="2.1% increase">
                    <TrendingUp className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span className="text-xs">+2.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Session</p>
                    <p className="text-2xl font-bold text-foreground">4m 32s</p>
                  </div>
                  <div className="flex items-center text-red-600" aria-label="0.8% decrease">
                    <TrendingDown className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span className="text-xs">-0.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Click-through Rate</p>
                    <p className="text-2xl font-bold text-foreground">24.6%</p>
                  </div>
                  <div className="flex items-center text-green-600" aria-label="3.4% increase">
                    <TrendingUp className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span className="text-xs">+3.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="engagement" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger value="engagement" className="data-[state=active]:bg-background data-[state=active]:text-foreground">Engagement</TabsTrigger>
              <TabsTrigger value="audience" className="data-[state=active]:bg-background data-[state=active]:text-foreground">Audience</TabsTrigger>
              <TabsTrigger value="campaigns" className="data-[state=active]:bg-background data-[state=active]:text-foreground">Campaigns</TabsTrigger>
              <TabsTrigger value="devices" className="data-[state=active]:bg-background data-[state=active]:text-foreground">Devices</TabsTrigger>
            </TabsList>

            <TabsContent value="engagement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Engagement Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="messages" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="opens" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="responses" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Age Demographics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={audienceData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="age" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--foreground))'
                          }}
                        />
                        <Bar dataKey="count" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Audience Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {audienceData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{item.age}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="campaigns" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Campaign Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={campaignPerformance}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="sent" fill="#94a3b8" />
                      <Bar dataKey="delivered" fill="#3b82f6" />
                      <Bar dataKey="opened" fill="#10b981" />
                      <Bar dataKey="clicked" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="devices" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Device Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--foreground))'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Device Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {deviceData.map((device, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: device.color }}
                          />
                          <span className="text-foreground">{device.name}</span>
                        </div>
                        <span className="text-2xl font-bold text-foreground">{device.value}%</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Insights;
