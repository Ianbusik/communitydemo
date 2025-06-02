
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartTooltip } from "@/components/ui/chart";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { messageTypesData } from './DashboardData';

export const MessageTypesChart: React.FC = () => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">Message Types</CardTitle>
          <div className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-lg font-medium">
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
                stroke="hsl(var(--background))"
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
                      <div className="bg-card p-3 rounded-lg shadow-lg border border-border">
                        <div className="flex items-center space-x-2 mb-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: data.color }}
                          />
                          <span className="font-semibold text-foreground">{data.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>{data.value}% of total messages</div>
                          <div>{data.count} messages sent</div>
                          <div className="text-xs text-muted-foreground">{data.description}</div>
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
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-foreground">{item.value}%</span>
                    <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                      item.trend === 'up' 
                        ? 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30' 
                        : 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
                    }`}>
                      {item.trend === 'up' ? 
                        <ArrowUp className="h-3 w-3 mr-1" /> : 
                        <ArrowDown className="h-3 w-3 mr-1" />
                      }
                      {item.trendValue}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.count} messages</p>
                </div>
              </div>
              <Progress 
                value={item.value} 
                className="h-2 bg-muted"
                style={{
                  '--progress-foreground': item.color
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">282</p>
              <p className="text-xs text-muted-foreground">Total Messages</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">+7.2%</p>
              <p className="text-xs text-muted-foreground">vs Last Month</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
