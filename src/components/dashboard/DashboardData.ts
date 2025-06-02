
import { 
  Users, 
  Mail, 
  MousePointer, 
  TrendingUp, 
  MessageSquare, 
  Image, 
  FileText, 
  Phone,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export const stats = [
  {
    title: "Total Subscribers",
    value: "12,486",
    change: "+12%",
    trend: "up" as const,
    icon: Users,
    iconBg: "bg-blue-500",
    subtitle: "Active users this month"
  },
  {
    title: "Messages Sent",
    value: "3,247",
    change: "+8%",
    trend: "up" as const,
    icon: Mail,
    iconBg: "bg-green-500",
    subtitle: "Delivered successfully"
  },
  {
    title: "Click Rate",
    value: "24.3%",
    change: "-2%",
    trend: "down" as const,
    icon: MousePointer,
    iconBg: "bg-orange-500",
    subtitle: "Above industry average"
  },
  {
    title: "Revenue",
    value: "$84,256",
    change: "+15%",
    trend: "up" as const,
    icon: TrendingUp,
    iconBg: "bg-purple-500",
    subtitle: "Monthly recurring revenue"
  }
];

export const campaignData = [
  { date: "Mon", sent: 1200, delivered: 1150, opened: 890, clicked: 245, openRate: 77.4, clickRate: 27.5 },
  { date: "Tue", sent: 1350, delivered: 1298, opened: 1024, clicked: 287, openRate: 78.9, clickRate: 28.0 },
  { date: "Wed", sent: 1180, delivered: 1134, opened: 876, clicked: 198, openRate: 77.2, clickRate: 22.6 },
  { date: "Thu", sent: 1420, delivered: 1365, opened: 1147, clicked: 334, openRate: 84.0, clickRate: 29.1 },
  { date: "Fri", sent: 1580, delivered: 1518, opened: 1289, clicked: 412, openRate: 84.9, clickRate: 32.0 },
  { date: "Sat", sent: 980, delivered: 941, opened: 706, clicked: 169, openRate: 75.0, clickRate: 23.9 },
  { date: "Sun", sent: 750, delivered: 720, opened: 518, clicked: 114, openRate: 71.9, clickRate: 22.0 }
];

export const chartConfig = {
  sent: {
    label: "Sent",
    color: "hsl(var(--chart-1))"
  },
  delivered: {
    label: "Delivered", 
    color: "hsl(var(--chart-2))"
  },
  opened: {
    label: "Opened",
    color: "hsl(var(--chart-3))"
  },
  clicked: {
    label: "Clicked",
    color: "hsl(var(--chart-4))"
  }
};

export const audienceGrowthData = [
  { 
    month: "Jan", 
    subscribers: 8420, 
    newSubscribers: 420, 
    unsubscribes: 32, 
    netGrowth: 388,
    growthRate: 4.8,
    engagementRate: 72.3,
    activeUsers: 6420
  },
  { 
    month: "Feb", 
    subscribers: 9150, 
    newSubscribers: 730, 
    unsubscribes: 45, 
    netGrowth: 685,
    growthRate: 8.1,
    engagementRate: 74.1,
    activeUsers: 6980
  },
  { 
    month: "Mar", 
    subscribers: 9890, 
    newSubscribers: 740, 
    unsubscribes: 28, 
    netGrowth: 712,
    growthRate: 7.8,
    engagementRate: 76.8,
    activeUsers: 7590
  },
  { 
    month: "Apr", 
    subscribers: 10650, 
    newSubscribers: 760, 
    unsubscribes: 41, 
    netGrowth: 719,
    growthRate: 7.3,
    engagementRate: 78.2,
    activeUsers: 8330
  },
  { 
    month: "May", 
    subscribers: 11420, 
    newSubscribers: 770, 
    unsubscribes: 35, 
    netGrowth: 735,
    growthRate: 6.9,
    engagementRate: 79.5,
    activeUsers: 9080
  },
  { 
    month: "Jun", 
    subscribers: 12200, 
    newSubscribers: 780, 
    unsubscribes: 29, 
    netGrowth: 751,
    growthRate: 6.8,
    engagementRate: 81.2,
    activeUsers: 9906
  }
];

export const messageTypesData = [
  { 
    name: "Text Messages", 
    value: 45, 
    color: "#3b82f6", 
    count: 127,
    icon: MessageSquare,
    description: "Standard text communications",
    trend: "up" as const,
    trendValue: "+5.2%"
  },
  { 
    name: "Image Messages", 
    value: 30, 
    color: "#10b981", 
    count: 84,
    icon: Image,
    description: "Photos and visual content",
    trend: "up" as const,
    trendValue: "+12.1%"
  },
  { 
    name: "Document Shares", 
    value: 15, 
    color: "#f59e0b", 
    count: 42,
    icon: FileText,
    description: "PDFs and file attachments",
    trend: "down" as const,
    trendValue: "-3.4%"
  },
  { 
    name: "Voice Calls", 
    value: 10, 
    color: "#8b5cf6", 
    count: 29,
    icon: Phone,
    description: "Audio conversations",
    trend: "up" as const,
    trendValue: "+8.7%"
  }
];

export const recentCampaigns = [
  {
    id: 1,
    name: "Holiday Sale 2024",
    subject: "🎄 Exclusive Holiday Deals - Up to 50% Off!",
    status: "completed",
    sent: "2 hours ago",
    recipients: 15420,
    delivered: 14890,
    deliveryRate: "96.6%",
    openRate: "32.4%",
    clickRate: "8.7%",
    bounces: 245,
    unsubscribes: 18,
    revenue: "$12,450",
    segment: "All Subscribers",
    trend: "up" as const
  },
  {
    id: 2,
    name: "Product Launch Alert",
    subject: "🚀 Introducing Our Latest Innovation",
    status: "completed",
    sent: "1 day ago",
    recipients: 8920,
    delivered: 8654,
    deliveryRate: "97.0%",
    openRate: "28.9%",
    clickRate: "6.2%",
    bounces: 156,
    unsubscribes: 12,
    revenue: "$8,790",
    segment: "Premium Users",
    trend: "up" as const
  },
  {
    id: 3,
    name: "Weekly Newsletter",
    subject: "📰 This Week's Top Stories & Updates",
    status: "completed",
    sent: "3 days ago",
    recipients: 22100,
    delivered: 21340,
    deliveryRate: "96.6%",
    openRate: "24.1%",
    clickRate: "4.8%",
    bounces: 398,
    unsubscribes: 28,
    revenue: "$3,420",
    segment: "Newsletter Subscribers",
    trend: "down" as const
  },
  {
    id: 4,
    name: "Flash Sale Alert",
    subject: "⚡ 24-Hour Flash Sale - Limited Time Only!",
    status: "completed",
    sent: "5 days ago",
    recipients: 12890,
    delivered: 12456,
    deliveryRate: "96.6%",
    openRate: "41.2%",
    clickRate: "12.3%",
    bounces: 287,
    unsubscribes: 15,
    revenue: "$18,650",
    segment: "VIP Customers",
    trend: "up" as const
  }
];
