
import * as React from "react"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface ChecklistItem {
  id: string
  title: string
  description: string
  completed: boolean
  action?: () => void
}

interface OnboardingChecklistProps {
  onDismiss?: () => void
}

export function OnboardingChecklist({ onDismiss }: OnboardingChecklistProps) {
  const [items, setItems] = React.useState<ChecklistItem[]>([
    {
      id: '1',
      title: 'Create your first community',
      description: 'Set up a community to start engaging with members',
      completed: true
    },
    {
      id: '2',
      title: 'Send your first message',
      description: 'Send a welcome message to your community',
      completed: true
    },
    {
      id: '3',
      title: 'Create a campaign',
      description: 'Set up an automated campaign to engage members',
      completed: false
    },
    {
      id: '4',
      title: 'Set up automation flows',
      description: 'Create automated sequences for better engagement',
      completed: false
    },
    {
      id: '5',
      title: 'Review analytics',
      description: 'Check your community insights and performance',
      completed: false
    }
  ])

  const completedCount = items.filter(item => item.completed).length
  const progress = (completedCount / items.length) * 100

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  if (completedCount === items.length) {
    return null
  }

  return (
    <Card className="mb-6 bg-background border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Getting Started</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            aria-label="Dismiss checklist"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{completedCount} of {items.length} completed</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
              item.completed 
                ? 'bg-muted/50 text-muted-foreground' 
                : 'bg-accent/50 hover:bg-accent'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`mt-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                item.completed
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'border-muted-foreground hover:border-primary'
              }`}
              aria-label={`Mark "${item.title}" as ${item.completed ? 'incomplete' : 'complete'}`}
            >
              {item.completed && <Check className="h-3 w-3" />}
            </button>
            <div className="flex-1">
              <h4 className={`font-medium ${item.completed ? 'line-through' : ''}`}>
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
