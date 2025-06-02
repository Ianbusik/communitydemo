
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle2, Circle, X, ChevronDown, ChevronUp } from 'lucide-react';

interface OnboardingChecklistProps {
  onDismiss: () => void;
}

export function OnboardingChecklist({ onDismiss }: OnboardingChecklistProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const tasks = [
    { id: 'profile', title: 'Complete your profile', description: 'Add your business information and preferences' },
    { id: 'community', title: 'Create your first community', description: 'Set up a community to start engaging with members' },
    { id: 'campaign', title: 'Send your first campaign', description: 'Create and send a welcome message to your community' },
    { id: 'flows', title: 'Set up automated flows', description: 'Create automated message sequences for better engagement' },
  ];

  const toggleTask = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const completionPercentage = (completedTasks.size / tasks.length) * 100;

  return (
    <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                Getting Started
              </CardTitle>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {completedTasks.size}/{tasks.length} completed
              </Badge>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onDismiss}
              className="h-8 w-8 p-0 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Progress value={completionPercentage} className="mt-2" />
        </CardHeader>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {tasks.map((task) => {
                const isCompleted = completedTasks.has(task.id);
                return (
                  <div 
                    key={task.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-blue-900 border border-blue-100 dark:border-blue-800 cursor-pointer hover:bg-blue-25 dark:hover:bg-blue-900/50 transition-colors"
                    onClick={() => toggleTask(task.id)}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-blue-400 dark:text-blue-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium ${isCompleted ? 'text-green-800 dark:text-green-200 line-through' : 'text-blue-900 dark:text-blue-100'}`}>
                        {task.title}
                      </h4>
                      <p className={`text-sm ${isCompleted ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-300'}`}>
                        {task.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
