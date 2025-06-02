
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/': 'Welcome - Community Management Platform',
  '/home': 'Dashboard - Community Management Platform',
  '/messages': 'Messages - Community Management Platform',
  '/campaigns': 'Campaigns - Community Management Platform',
  '/flows': 'Automation Flows - Community Management Platform',
  '/communities': 'Communities - Community Management Platform',
  '/insights': 'Analytics & Insights - Community Management Platform',
  '/scheduled': 'Scheduled Messages - Community Management Platform',
  '/growth-tools': 'Growth Tools - Community Management Platform',
  '/settings': 'Settings - Community Management Platform'
};

const routeDescriptions: Record<string, string> = {
  '/': 'Get started with our comprehensive community management platform',
  '/home': 'Overview of your community metrics, campaigns, and performance analytics',
  '/messages': 'Send and manage SMS messages with your community members',
  '/campaigns': 'Create, manage, and analyze your SMS marketing campaigns',
  '/flows': 'Set up automated message flows and sequences for member engagement',
  '/communities': 'Manage your community groups, members, and engagement settings',
  '/insights': 'Deep analytics and insights into your community performance and engagement',
  '/scheduled': 'View and manage all your scheduled messages and campaigns',
  '/growth-tools': 'Tools and strategies to grow your community membership',
  '/settings': 'Configure your account, notifications, and platform preferences'
};

export const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || 'Community Management Platform';
    const description = routeDescriptions[location.pathname] || 'Comprehensive community management platform';
    
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update Open Graph title and description
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (ogTitle) ogTitle.content = title;
    
    let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (ogDescription) ogDescription.content = description;

    // Update Twitter title and description
    let twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement;
    if (twitterTitle) twitterTitle.content = title;
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement;
    if (twitterDescription) twitterDescription.content = description;

  }, [location.pathname]);
};
