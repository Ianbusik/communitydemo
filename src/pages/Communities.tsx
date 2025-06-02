
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Users, MessageSquare, Calendar, Settings, Crown, Star } from "lucide-react";

const Communities = () => {
  const [communities] = useState([
    {
      id: 1,
      name: "Product Enthusiasts",
      description: "A community for our most engaged users",
      members: 1247,
      activeMembers: 892,
      totalMessages: 15847,
      created: "Jan 15, 2024",
      category: "Product",
      isPrivate: false,
      moderators: ["Alex Johnson", "Sarah Chen"]
    },
    {
      id: 2,
      name: "VIP Members",
      description: "Exclusive community for premium subscribers",
      members: 156,
      activeMembers: 134,
      totalMessages: 3421,
      created: "Mar 8, 2024",
      category: "Premium",
      isPrivate: true,
      moderators: ["Mike Davis"]
    },
    {
      id: 3,
      name: "Beta Testers",
      description: "Early access and feedback community",
      members: 423,
      activeMembers: 301,
      totalMessages: 8956,
      created: "Feb 20, 2024",
      category: "Testing",
      isPrivate: false,
      moderators: ["Lisa Wang", "Tom Brown"]
    }
  ]);

  const [recentActivity] = useState([
    {
      id: 1,
      user: "John Doe",
      action: "joined",
      community: "Product Enthusiasts",
      time: "2 minutes ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      user: "Sarah Miller",
      action: "posted",
      community: "VIP Members",
      time: "15 minutes ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      user: "Alex Chen",
      action: "commented",
      community: "Beta Testers",
      time: "1 hour ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      user: "Emma Wilson",
      action: "joined",
      community: "VIP Members",
      time: "3 hours ago",
      avatar: "/placeholder.svg"
    }
  ]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Communities</h1>
              <p className="text-muted-foreground mt-1">Manage and engage with your community groups</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Community
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Total Members</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">1,826</p>
                <p className="text-xs text-green-600 mt-1">+12% this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">Messages</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">28,224</p>
                <p className="text-xs text-green-600 mt-1">+8% this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-muted-foreground">Active Communities</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">3</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-muted-foreground">Events This Month</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">12</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="communities" className="space-y-6">
            <TabsList>
              <TabsTrigger value="communities">Communities</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="communities" className="space-y-4">
              {communities.map((community) => (
                <Card key={community.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{community.name}</h3>
                          {community.isPrivate && (
                            <Badge variant="secondary" className="gap-1">
                              <Crown className="h-3 w-3" />
                              Private
                            </Badge>
                          )}
                          <Badge variant="outline">{community.category}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{community.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-foreground">Members:</span>
                            <p className="text-muted-foreground">{community.members.toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Active:</span>
                            <p className="text-muted-foreground">{community.activeMembers.toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Messages:</span>
                            <p className="text-muted-foreground">{community.totalMessages.toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Created:</span>
                            <p className="text-muted-foreground">{community.created}</p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <span className="text-sm font-medium text-foreground">Moderators: </span>
                          <span className="text-sm text-muted-foreground">{community.moderators.join(", ")}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg border">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.avatar} />
                        <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.user}</span>
                          {" "}{activity.action}{" "}
                          <span className="font-medium">{activity.community}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Communities;
