
import { useState } from "react"
import { 
  Home, 
  MessageSquare, 
  Megaphone, 
  GitBranch,
  Users, 
  BarChart3, 
  Calendar,
  TrendingUp,
  Puzzle,
  Settings,
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Campaigns", url: "/campaigns", icon: Megaphone },
  { title: "Flows", url: "/flows", icon: GitBranch },
  { title: "Communities", url: "/communities", icon: Users },
  { title: "Insights", url: "/insights", icon: BarChart3 },
  { title: "Scheduled", url: "/scheduled", icon: Calendar },
  { title: "Growth Tools", url: "/growth-tools", icon: TrendingUp },
  { title: "Add-Ons", url: "/", icon: Puzzle },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          {state === "expanded" && (
            <span className="font-semibold text-gray-900">Community</span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
