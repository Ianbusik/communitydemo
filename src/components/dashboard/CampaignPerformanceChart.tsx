import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';
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

  // Custom label component with better visibility
  const CustomLabel = (props: any) => {
    const { x, y, value, dataKey } = props;
    if (!visibleLines[dataKey as keyof typeof visibleLines]) return null;
    
    return (
      <text 
        x={x} 
        y={y - 12} 
        fill={chartConfig[dataKey]?.color || '#666'} 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontSize={11}
        fontWeight="600"
        stroke="hsl(var(--card))"
        strokeWidth={3}
        paintOrder="stroke"
      >
        {value.toLocaleString()}
      </text>
    );
  };

  // Enhanced tooltip content
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card p-4 border border-border rounded-lg shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          <div className="space-y-2">
            {payload.map((entry: any) => (
              <div key={entry.dataKey} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-muted-foreground">{entry.name}:</span>
                </div>
                <span className="font-medium text-foreground">{entry.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-3 pt-3 space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Delivery Rate:</span>
              <span>{((data.delivered / data.sent) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Open Rate:</span>
              <span>{((data.opened / data.delivered) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
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
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-card">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-xl font-semibold text-foreground">Campaign Performance</CardTitle>
          </div>
          <div className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-lg font-medium">Last 7 Days</div>
        </div>
        
        {/* Performance Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border border-blue-100 dark:border-blue-900/50">
            <div className="flex items-center space-x-2 mb-1">
              <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-800 dark:text-blue-200">Avg Delivery</span>
            </div>
            <p className="text-lg font-bold text-blue-900 dark:text-blue-100">{avgDeliveryRate}%</p>
          </div>
          <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 border border-green-100 dark:border-green-900/50">
            <div className="flex items-center space-x-2 mb-1">
              <Eye className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-800 dark:text-green-200">Avg Open</span>
            </div>
            <p className="text-lg font-bold text-green-900 dark:text-green-100">{avgOpenRate}%</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-3 border border-orange-100 dark:border-orange-900/50">
            <div className="flex items-center space-x-2 mb-1">
              <MousePointer className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-medium text-orange-800 dark:text-orange-200">Avg Click</span>
            </div>
            <p className="text-lg font-bold text-orange-900 dark:text-orange-100">{avgClickRate}%</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3 border border-purple-100 dark:border-purple-900/50">
            <div className="flex items-center space-x-2 mb-1">
              <Star className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-medium text-purple-800 dark:text-purple-200">Best Day</span>
            </div>
            <p className="text-sm font-bold text-purple-900 dark:text-purple-100">{bestPerformingDay.date}</p>
          </div>
        </div>

        {/* Interactive Legend / Toggle Controls */}
        <div className="flex flex-wrap gap-2 mt-4 p-3 bg-muted rounded-lg">
          <span className="text-sm font-medium text-foreground mr-2">Show:</span>
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
                style={{ backgroundColor: visibleLines[key as keyof typeof visibleLines] ? config.color : 'hsl(var(--muted-foreground))' }}
              />
              {config.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="h-80 w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={campaignData} margin={{ top: 40, right: 20, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                fontSize={12}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                fontSize={12}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
                width={60}
              />
              {visibleLines.sent && (
                <Line 
                  type="monotone" 
                  dataKey="sent" 
                  stroke={chartConfig.sent.color}
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "hsl(var(--card))" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                >
                  <LabelList content={<CustomLabel />} />
                </Line>
              )}
              {visibleLines.delivered && (
                <Line 
                  type="monotone" 
                  dataKey="delivered" 
                  stroke={chartConfig.delivered.color}
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "hsl(var(--card))" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                >
                  <LabelList content={<CustomLabel />} />
                </Line>
              )}
              {visibleLines.opened && (
                <Line 
                  type="monotone" 
                  dataKey="opened" 
                  stroke={chartConfig.opened.color}
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "hsl(var(--card))" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                >
                  <LabelList content={<CustomLabel />} />
                </Line>
              )}
              {visibleLines.clicked && (
                <Line 
                  type="monotone" 
                  dataKey="clicked" 
                  stroke={chartConfig.clicked.color}
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "hsl(var(--card))" }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                >
                  <LabelList content={<CustomLabel />} />
                </Line>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Data Table for At-a-Glance View */}
        <div className="mt-6 bg-muted rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-3">Daily Performance Data</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-medium text-muted-foreground">Day</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Sent</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Delivered</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Opened</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Clicked</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Open Rate</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Click Rate</th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((day, index) => (
                  <tr key={index} className="border-b border-border hover:bg-card transition-colors">
                    <td className="py-2 font-medium text-foreground">{day.date}</td>
                    <td className="text-right py-2 text-muted-foreground">{day.sent.toLocaleString()}</td>
                    <td className="text-right py-2 text-muted-foreground">{day.delivered.toLocaleString()}</td>
                    <td className="text-right py-2 text-muted-foreground">{day.opened.toLocaleString()}</td>
                    <td className="text-right py-2 text-muted-foreground">{day.clicked.toLocaleString()}</td>
                    <td className="text-right py-2 text-muted-foreground">{day.openRate.toFixed(1)}%</td>
                    <td className="text-right py-2 text-muted-foreground">{day.clickRate.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Enhanced Quick Insights */}
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-lg border border-blue-100 dark:border-blue-900/50">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Performance Insights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>Total messages sent: <strong className="text-foreground">{totalSent.toLocaleString()}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Delivery rate: <strong className="text-foreground">{avgDeliveryRate}%</strong> (Excellent)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-orange-500" />
              <span>Open rate: <strong className="text-foreground">{avgOpenRate}%</strong> (Above average)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MousePointer className="h-4 w-4 text-purple-500" />
              <span>Click rate: <strong className="text-foreground">{avgClickRate}%</strong> (Strong performance)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
