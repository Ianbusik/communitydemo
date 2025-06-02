
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, MessageSquare, Edit, Trash2, Play, Pause } from "lucide-react";

const Scheduled = () => {
  const [scheduledMessages] = useState([
    {
      id: 1,
      title: "Weekly Newsletter",
      message: "Check out this week's highlights and upcoming events!",
      scheduledFor: "2024-06-08T09:00:00",
      recipients: 2450,
      status: "scheduled",
      type: "newsletter",
      campaign: "Weekly Updates"
    },
    {
      id: 2,
      title: "Product Launch Reminder",
      message: "Don't miss our exciting new product launch tomorrow!",
      scheduledFor: "2024-06-07T14:30:00",
      recipients: 1890,
      status: "sending",
      type: "promotion",
      campaign: "Product Launch"
    },
    {
      id: 3,
      title: "Community Event Invitation",
      message: "Join us for our monthly community meetup next Friday!",
      scheduledFor: "2024-06-10T11:00:00",
      recipients: 567,
      status: "scheduled",
      type: "event",
      campaign: "Community Events"
    },
    {
      id: 4,
      title: "Survey Request",
      message: "Help us improve by taking our 2-minute feedback survey.",
      scheduledFor: "2024-06-12T16:00:00",
      recipients: 3200,
      status: "paused",
      type: "survey",
      campaign: "Feedback Collection"
    }
  ]);

  const [upcomingEvents] = useState([
    {
      id: 1,
      name: "Monthly Community Meetup",
      date: "2024-06-10T18:00:00",
      attendees: 156,
      status: "confirmed"
    },
    {
      id: 2,
      name: "Product Demo Webinar",
      date: "2024-06-15T14:00:00",
      attendees: 89,
      status: "pending"
    },
    {
      id: 3,
      name: "Q&A Session with CEO",
      date: "2024-06-20T13:00:00",
      attendees: 234,
      status: "confirmed"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'sending': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'completed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'newsletter': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'promotion': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'event': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'survey': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Scheduled</h1>
              <p className="text-muted-foreground mt-1">Manage your scheduled messages and events</p>
            </div>
            <Button className="gap-2">
              <Calendar className="h-4 w-4" />
              Schedule Message
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Scheduled</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">12</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">Sending Today</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">3</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-muted-foreground">Total Recipients</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">8,107</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-muted-foreground">Events This Week</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">3</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="messages" className="space-y-6">
            <TabsList>
              <TabsTrigger value="messages">Scheduled Messages</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="space-y-4">
              {scheduledMessages.map((message) => {
                const { date, time } = formatDateTime(message.scheduledFor);
                return (
                  <Card key={message.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{message.title}</h3>
                            <Badge className={getStatusColor(message.status)}>
                              {message.status}
                            </Badge>
                            <Badge className={getTypeColor(message.type)}>
                              {message.type}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-3">{message.message}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-foreground">Date:</span>
                              <p className="text-muted-foreground">{date}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Time:</span>
                              <p className="text-muted-foreground">{time}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Recipients:</span>
                              <p className="text-muted-foreground">{message.recipients.toLocaleString()}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Campaign:</span>
                              <p className="text-muted-foreground">{message.campaign}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {message.status === 'paused' ? (
                            <Button variant="outline" size="sm" className="gap-2">
                              <Play className="h-4 w-4" />
                              Resume
                            </Button>
                          ) : message.status === 'scheduled' ? (
                            <Button variant="outline" size="sm" className="gap-2">
                              <Pause className="h-4 w-4" />
                              Pause
                            </Button>
                          ) : null}
                          
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              {upcomingEvents.map((event) => {
                const { date, time } = formatDateTime(event.date);
                return (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{event.name}</h3>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-foreground">Date:</span>
                              <p className="text-muted-foreground">{date}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Time:</span>
                              <p className="text-muted-foreground">{time}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Attendees:</span>
                              <p className="text-muted-foreground">{event.attendees}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Scheduled;
