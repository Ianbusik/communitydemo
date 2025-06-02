
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Target, 
  Users, 
  MessageSquare, 
  Share2, 
  Gift, 
  Zap, 
  BarChart3,
  Settings,
  ArrowUp,
  Star,
  Crown,
  Rocket,
  Mail,
  UserPlus,
  Heart,
  Award
} from 'lucide-react';

const GrowthTools = () => {
  const [activeReferrals, setActiveReferrals] = useState(247);
  const [conversionRate, setConversionRate] = useState(12.4);

  const growthMetrics = [
    {
      title: "Referral Sign-ups",
      value: "1,247",
      change: "+18%",
      icon: UserPlus,
      color: "text-blue-600"
    },
    {
      title: "Viral Coefficient",
      value: "2.3x",
      change: "+0.4x",
      icon: Share2,
      color: "text-green-600"
    },
    {
      title: "Retention Rate",
      value: "78%",
      change: "+5%",
      icon: Heart,
      color: "text-purple-600"
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      change: "+2.1%",
      icon: Target,
      color: "text-orange-600"
    }
  ];

  const referralPrograms = [
    {
      title: "Friend Referral",
      description: "Earn rewards for each friend you refer",
      reward: "10% commission",
      status: "active",
      participants: 892,
      icon: Users
    },
    {
      title: "Loyalty Program",
      description: "Points for every action and purchase",
      reward: "5x points",
      status: "active",
      participants: 1547,
      icon: Star
    },
    {
      title: "VIP Tier System",
      description: "Exclusive benefits for top users",
      reward: "Premium access",
      status: "active",
      participants: 234,
      icon: Crown
    }
  ];

  const growthCampaigns = [
    {
      title: "Welcome Series",
      type: "Email Automation",
      status: "Running",
      performance: 85,
      engaged: 1240,
      icon: Mail
    },
    {
      title: "Social Media Contest",
      type: "Viral Campaign",
      status: "Planning",
      performance: 0,
      engaged: 0,
      icon: Gift
    },
    {
      title: "Product Hunt Launch",
      type: "PR Campaign",
      status: "Scheduled",
      performance: 0,
      engaged: 0,
      icon: Rocket
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'Running':
        return 'bg-green-100 text-green-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              Growth Tools
            </h1>
            <p className="text-gray-600 mt-2">
              Accelerate your community growth with powerful tools and campaigns
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Configure Tools
          </Button>
        </div>

        {/* Growth Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <ArrowUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">{metric.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="referrals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="referrals">Referral Programs</TabsTrigger>
            <TabsTrigger value="campaigns">Growth Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="tools">Tools & Integrations</TabsTrigger>
          </TabsList>

          {/* Referral Programs Tab */}
          <TabsContent value="referrals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Active Referral Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {referralPrograms.map((program, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <program.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <Badge className={getStatusColor(program.status)}>
                          {program.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Reward:</span>
                          <span className="font-medium text-green-600">{program.reward}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Participants:</span>
                          <span className="font-medium">{program.participants.toLocaleString()}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Manage Program
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Growth Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Growth Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {growthCampaigns.map((campaign, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <campaign.icon className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{campaign.title}</h3>
                            <p className="text-sm text-gray-600">{campaign.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                      {campaign.status === 'Running' && (
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Performance</p>
                            <Progress value={campaign.performance} className="mt-1" />
                            <p className="text-xs text-gray-500 mt-1">{campaign.performance}% of goal</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Engaged Users</p>
                            <p className="text-xl font-bold text-gray-900">{campaign.engaged.toLocaleString()}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">
                  <Zap className="h-4 w-4 mr-2" />
                  Create New Campaign
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Growth Funnel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">Visitors</span>
                      <span className="text-xl font-bold">10,247</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">Sign-ups</span>
                      <span className="text-xl font-bold">1,892</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium">Active Users</span>
                      <span className="text-xl font-bold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium">Referrals</span>
                      <span className="text-xl font-bold">324</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Top Performers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Sarah Johnson", referrals: 47, reward: "$470" },
                      { name: "Mike Chen", referrals: 32, reward: "$320" },
                      { name: "Emily Davis", referrals: 28, reward: "$280" },
                      { name: "Alex Wilson", referrals: 24, reward: "$240" }
                    ].map((performer, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {performer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{performer.name}</p>
                            <p className="text-sm text-gray-600">{performer.referrals} referrals</p>
                          </div>
                        </div>
                        <span className="font-bold text-green-600">{performer.reward}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tools & Integrations Tab */}
          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Available Tools & Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Zapier", description: "Automate workflows", status: "Connected", icon: "⚡" },
                    { name: "Mailchimp", description: "Email marketing", status: "Not Connected", icon: "📧" },
                    { name: "Google Analytics", description: "Track performance", status: "Connected", icon: "📊" },
                    { name: "Facebook Pixel", description: "Social tracking", status: "Not Connected", icon: "📱" },
                    { name: "Intercom", description: "Customer support", status: "Connected", icon: "💬" },
                    { name: "Stripe", description: "Payment processing", status: "Connected", icon: "💳" }
                  ].map((tool, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{tool.icon}</span>
                        <div>
                          <h3 className="font-semibold">{tool.name}</h3>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className={tool.status === 'Connected' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {tool.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          {tool.status === 'Connected' ? 'Configure' : 'Connect'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GrowthTools;
