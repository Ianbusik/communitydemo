
import * as React from "react"
import { Search, MessageSquare, Megaphone, Users, Calendar, BarChart3 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'campaign' | 'message' | 'community' | 'flow' | 'insight'
  url: string
  icon: React.ComponentType<{ className?: string }>
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Welcome Campaign',
    description: 'Automated welcome sequence for new members',
    type: 'campaign',
    url: '/campaigns',
    icon: Megaphone
  },
  {
    id: '2',
    title: 'Marketing Community',
    description: '1,234 active members',
    type: 'community',
    url: '/communities',
    icon: Users
  },
  {
    id: '3',
    title: 'Weekly Newsletter',
    description: 'Scheduled for every Monday at 9 AM',
    type: 'message',
    url: '/scheduled',
    icon: Calendar
  },
  {
    id: '4',
    title: 'Engagement Analytics',
    description: 'View member engagement trends',
    type: 'insight',
    url: '/insights',
    icon: BarChart3
  }
]

export function UniversalSearch() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const navigate = useNavigate()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredResults = mockResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.description.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (url: string) => {
    setOpen(false)
    navigate(url)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground border border-border rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring min-w-[200px]"
        aria-label="Open search (Ctrl+/)"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">
          Ctrl+/
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search campaigns, messages, communities..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Results">
            {filteredResults.map((result) => (
              <CommandItem
                key={result.id}
                onSelect={() => handleSelect(result.url)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <result.icon className="h-4 w-4" />
                <div className="flex-1">
                  <div className="font-medium">{result.title}</div>
                  <div className="text-xs text-muted-foreground">{result.description}</div>
                </div>
                <div className="text-xs bg-muted px-2 py-0.5 rounded capitalize">
                  {result.type}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
