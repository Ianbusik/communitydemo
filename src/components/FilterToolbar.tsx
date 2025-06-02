
import * as React from "react"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface FilterToolbarProps {
  onStatusFilter?: (status: string[]) => void
  onSortChange?: (field: string, direction: 'asc' | 'desc') => void
  sortField?: string
  sortDirection?: 'asc' | 'desc'
  activeFilters?: string[]
  sortOptions?: { value: string; label: string }[]
}

export function FilterToolbar({
  onStatusFilter,
  onSortChange,
  sortField,
  sortDirection = 'asc',
  activeFilters = [],
  sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'date', label: 'Date' },
    { value: 'status', label: 'Status' }
  ]
}: FilterToolbarProps) {
  const [selectedStatuses, setSelectedStatuses] = React.useState<string[]>([])

  const handleStatusChange = (statuses: string[]) => {
    setSelectedStatuses(statuses)
    onStatusFilter?.(statuses)
  }

  const handleSort = (field: string) => {
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc'
    onSortChange?.(field, newDirection)
  }

  return (
    <div className="flex items-center gap-4 p-4 border-b border-border bg-muted/50">
      {/* Status Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Status:</span>
        <ToggleGroup 
          type="multiple" 
          value={selectedStatuses}
          onValueChange={handleStatusChange}
          className="border border-border rounded-md"
        >
          <ToggleGroupItem value="active" aria-label="Filter by active">
            Active
          </ToggleGroupItem>
          <ToggleGroupItem value="paused" aria-label="Filter by paused">
            Paused
          </ToggleGroupItem>
          <ToggleGroupItem value="draft" aria-label="Filter by draft">
            Draft
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Sort Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2" aria-label="Sort options">
            Sort by
            {sortDirection === 'asc' ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background border-border">
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleSort(option.value)}
              className="cursor-pointer hover:bg-accent"
            >
              {option.label}
              {sortField === option.value && (
                sortDirection === 'asc' ? (
                  <ChevronUp className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-auto h-4 w-4" />
                )
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Filters:</span>
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="text-xs">
              {filter}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
