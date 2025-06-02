
import { MessageSquare, Users, TrendingUp, Calendar, Megaphone, FileText, Bell, Mail } from 'lucide-react';

export const campaignData = [
  { 
    date: 'May 26', 
    sent: 1200, 
    delivered: 1180, 
    opened: 850, 
    clicked: 320,
    deliveryRate: 98.3,
    openRate: 72.0,
    clickRate: 27.1,
    bounced: 20,
    unsubscribed: 5
  },
  { 
    date: 'May 27', 
    sent: 1350, 
    delivered: 1330, 
    opened: 920, 
    clicked: 280,
    deliveryRate: 98.5,
    openRate: 69.2,
    clickRate: 21.0,
    bounced: 20,
    unsubscribed: 8
  },
  { 
    date: 'May 28', 
    sent: 980, 
    delivered: 950, 
    opened: 600, 
    clicked: 180,
    deliveryRate: 96.9,
    openRate: 63.2,
    clickRate: 30.0,
    bounced: 30,
    unsubscribed: 3
  },
  { 
    date: 'May 29', 
    sent: 1450, 
    delivered: 1420, 
    opened: 950, 
    clicked: 300,
    deliveryRate: 97.9,
    openRate: 66.9,
    clickRate: 31.6,
    bounced: 30,
    unsubscribed: 7
  },
  { 
    date: 'May 30', 
    sent: 1650, 
    delivered: 1630, 
    opened: 1100, 
    clicked: 420,
    deliveryRate: 98.8,
    openRate: 67.5,
    clickRate: 38.2,
    bounced: 20,
    unsubscribed: 4
  },
  { 
    date: 'May 31', 
    sent: 1800, 
    delivered: 1780, 
    opened: 1250, 
    clicked: 450,
    deliveryRate: 98.9,
    openRate: 70.2,
    clickRate: 36.0,
    bounced: 20,
    unsubscribed: 6
  },
  { 
    date: 'Jun 1', 
    sent: 1900, 
    delivered: 1880, 
    opened: 1300, 
    clicked: 480,
    deliveryRate: 98.9,
    openRate: 69.2,
    clickRate: 36.9,
    bounced: 20,
    unsubscribed: 5
  },
];

export const audienceGrowthData = [
  { 
    month: 'Jan', 
    subscribers: 12500,
    newSubscribers: 850,
    unsubscribes: 120,
    netGrowth: 730,
    growthRate: 6.2,
    activeUsers: 9800,
    engagementRate: 78.4
  },
  { 
    month: 'Feb', 
    subscribers: 13200,
    newSubscribers: 920,
    unsubscribes: 220,
    netGrowth: 700,
    growthRate: 5.6,
    activeUsers: 10450,
    engagementRate: 79.2
  },
  { 
    month: 'Mar', 
    subscribers: 14100,
    newSubscribers: 1150,
    unsubscribes: 250,
    netGrowth: 900,
    growthRate: 6.8,
    activeUsers: 11200,
    engagementRate: 79.4
  },
  { 
    month: 'Apr', 
    subscribers: 15300,
    newSubscribers: 1420,
    unsubscribes: 220,
    netGrowth: 1200,
    growthRate: 8.5,
    activeUsers: 12150,
    engagementRate: 79.4
  },
  { 
    month: 'May', 
    subscribers: 16800,
    newSubscribers: 1750,
    unsubscribes: 250,
    netGrowth: 1500,
    growthRate: 9.8,
    activeUsers: 13440,
    engagementRate: 80.0
  },
  { 
    month: 'Jun', 
    subscribers: 18200,
    newSubscribers: 1680,
    unsubscribes: 280,
    netGrowth: 1400,
    growthRate: 8.3,
    activeUsers: 14560,
    engagementRate: 80.0
  },
];

export const messageTypesData = [
  { 
    name: 'Promotional', 
    value: 45, 
    color: '#3b82f6',
    count: 127,
    trend: 'up',
    trendValue: '+12%',
    description: 'Sales & marketing campaigns',
    icon: Megaphone
  },
  { 
    name: 'Newsletter', 
    value: 30, 
    color: '#10b981',
    count: 85,
    trend: 'up',
    trendValue: '+8%',
    description: 'Regular content updates',
    icon: FileText
  },
  { 
    name: 'Updates', 
    value: 15, 
    color: '#f59e0b',
    count: 42,
    trend: 'down',
    trendValue: '-3%',
    description: 'Product & service updates',
    icon: Bell
  },
  { 
    name: 'Alerts', 
    value: 10, 
    color: '#ef4444',
    count: 28,
    trend: 'up',
    trendValue: '+5%',
    description: 'Urgent notifications',
    icon: Mail
  },
];

export const recentCampaigns = [
  { 
    id: 1, 
    name: 'Summer Sale Campaign', 
    sent: '2 hours ago', 
    recipients: 15420, 
    openRate: '24.5%', 
    clickRate: '8.2%',
    delivered: 15180,
    deliveryRate: '98.4%',
    revenue: '$12,450',
    status: 'completed',
    trend: 'up',
    subject: '🌞 Summer Sale: Up to 50% Off Everything!',
    template: 'Promotional Email',
    segment: 'Active Customers',
    bounces: 240,
    unsubscribes: 18
  },
  { 
    id: 2, 
    name: 'Product Update Newsletter', 
    sent: '1 day ago', 
    recipients: 12300, 
    openRate: '31.2%', 
    clickRate: '12.8%',
    delivered: 12150,
    deliveryRate: '98.8%',
    revenue: '$3,280',
    status: 'completed',
    trend: 'up',
    subject: 'New Features: What\'s Coming This Month',
    template: 'Newsletter',
    segment: 'All Subscribers',
    bounces: 150,
    unsubscribes: 8
  },
  { 
    id: 3, 
    name: 'Welcome Series - Part 3', 
    sent: '2 days ago', 
    recipients: 8750, 
    openRate: '42.1%', 
    clickRate: '18.5%',
    delivered: 8680,
    deliveryRate: '99.2%',
    revenue: '$1,850',
    status: 'completed',
    trend: 'up',
    subject: 'Your Journey Continues: Advanced Tips Inside',
    template: 'Welcome Series',
    segment: 'New Subscribers',
    bounces: 70,
    unsubscribes: 12
  },
  { 
    id: 4, 
    name: 'Flash Sale Alert', 
    sent: '3 days ago', 
    recipients: 18600, 
    openRate: '18.7%', 
    clickRate: '6.4%',
    delivered: 18320,
    deliveryRate: '98.5%',
    revenue: '$8,920',
    status: 'completed',
    trend: 'down',
    subject: '⚡ Flash Sale: 24 Hours Only!',
    template: 'Flash Sale',
    segment: 'VIP Customers',
    bounces: 280,
    unsubscribes: 35
  },
];

export const stats = [
  {
    title: "Total Messages",
    value: "127,543",
    icon: MessageSquare,
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500",
    change: "+12.5%",
    trend: "up"
  },
  {
    title: "Active Subscribers", 
    value: "18,247",
    icon: Users,
    color: "from-green-500 to-green-600",
    iconBg: "bg-green-500",
    change: "+8.3%",
    trend: "up"
  },
  {
    title: "Open Rate",
    value: "24.8%", 
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-500",
    change: "+2.1%",
    trend: "up"
  },
  {
    title: "This Month",
    value: "89",
    subtitle: "Campaigns",
    icon: Calendar,
    color: "from-purple-500 to-purple-600", 
    iconBg: "bg-purple-500",
    change: "+15.2%",
    trend: "up"
  }
];

export const chartConfig = {
  sent: { label: "Sent", color: "#3b82f6" },
  delivered: { label: "Delivered", color: "#10b981" },
  opened: { label: "Opened", color: "#f59e0b" },
  clicked: { label: "Clicked", color: "#ef4444" },
};
