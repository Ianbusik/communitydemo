
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Pause, Edit, Trash2, Users, MessageSquare, Clock } from "lucide-react";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { toast } from "@/components/ui/sonner";

const Flows = () => {
  useDocumentTitle();
  
  const [flows, setFlows] = useState([
    {
      id: 1,
      name: "Welcome Series",
      status: "active",
      triggers: 2,
      steps: 5,
      subscribers: 847,
      completionRate: 78,
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      name: "Product Onboarding",
      status: "paused",
      triggers: 1,
      steps: 8,
      subscribers: 523,
      completionRate: 85,
      lastUpdated: "1 day ago"
    },
    {
      id: 3,
      name: "Re-engagement Campaign",
      status: "active",
      triggers: 3,
      steps: 4,
      subscribers: 1245,
      completionRate: 62,
      lastUpdated: "3 hours ago"
    },
    {
      id: 4,
      name: "Birthday Wishes",
      status: "draft",
      triggers: 1,
      steps: 2,
      subscribers: 0,
      completionRate: 0,
      lastUpdated: "1 week ago"
    }
  ]);

  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; flowId: number | null }>({
    open: false,
    flowId: null
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handleToggleFlow = (flowId: number) => {
    setFlows(flows.map(flow => {
      if (flow.id === flowId) {
        const newStatus = flow.status === 'active' ? 'paused' : 'active';
        toast.success(`Flow ${newStatus === 'active' ? 'started' : 'paused'} successfully`);
        return { ...flow, status: newStatus };
      }
      return flow;
    }));
  };

  const handleDeleteFlow = (flowId: number) => {
    setFlows(flows.filter(flow => flow.id !== flowId));
    setDeleteDialog({ open: false, flowId: null });
    toast.success('Flow deleted successfully');
  };

  const openDeleteDialog = (flowId: number) => {
    setDeleteDialog({ open: true, flowId });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Flows</h1>
              <p className="text-muted-foreground mt-1">Automate your messaging with smart flows</p>
            </div>
            <Button className="gap-2" aria-label="Create new automation flow">
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Flow
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" role="region" aria-label="Flow statistics overview">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-green-600" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">Active Flows</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">2</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">Total Subscribers</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">2,615</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple-600" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">Messages Sent</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">12,847</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-600" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">Avg. Completion</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-1">75%</p>
              </CardContent>
            </Card>
          </div>

          {/* Flows List */}
          <div className="space-y-4" role="region" aria-label="Automation flows list">
            {flows.map((flow) => (
              <Card key={flow.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{flow.name}</h3>
                        <Badge className={getStatusColor(flow.status)}>
                          {flow.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium">Triggers:</span> {flow.triggers}
                        </div>
                        <div>
                          <span className="font-medium">Steps:</span> {flow.steps}
                        </div>
                        <div>
                          <span className="font-medium">Subscribers:</span> {flow.subscribers.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Completion:</span> {flow.completionRate}%
                        </div>
                        <div>
                          <span className="font-medium">Updated:</span> {flow.lastUpdated}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {flow.status === 'active' ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => handleToggleFlow(flow.id)}
                          aria-label={`Pause ${flow.name} flow`}
                        >
                          <Pause className="h-4 w-4" aria-hidden="true" />
                          Pause
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => handleToggleFlow(flow.id)}
                          aria-label={`Start ${flow.name} flow`}
                        >
                          <Play className="h-4 w-4" aria-hidden="true" />
                          Start
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        aria-label={`Edit ${flow.name} flow`}
                      >
                        <Edit className="h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openDeleteDialog(flow.id)}
                        aria-label={`Delete ${flow.name} flow`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <ConfirmationDialog
            open={deleteDialog.open}
            onOpenChange={(open) => setDeleteDialog({ open, flowId: null })}
            title="Delete Flow"
            description="Are you sure you want to delete this flow? This action cannot be undone and will stop all active automations."
            confirmText="Delete"
            cancelText="Cancel"
            variant="destructive"
            onConfirm={() => deleteDialog.flowId && handleDeleteFlow(deleteDialog.flowId)}
          />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Flows;
