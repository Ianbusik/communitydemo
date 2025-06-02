import React, { useState } from 'react';
import { Search, ChevronDown, Check, Settings, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

interface AddOn {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  status: 'connected' | 'available' | 'setup';
  featured?: boolean;
  popular?: boolean;
}

const addOns: AddOn[] = [
  // Messaging
  { id: '1', name: 'AI Message Generator (Beta)', description: 'Generate messages using AI', category: 'Messaging', icon: '🤖', status: 'available', featured: true },
  { id: '2', name: 'Send Media using MMS', description: 'Send photos, videos, and files', category: 'Messaging', icon: '📱', status: 'connected', featured: true },
  { id: '3', name: 'Keyword Responders', description: 'Automatically respond to specific words', category: 'Messaging', icon: '🔤', status: 'setup' },
  { id: '4', name: 'Custom Member Data', description: 'Collect custom data on new members', category: 'Messaging', icon: '📊', status: 'available' },
  { id: '5', name: 'Filter Offensive Content', description: 'Block messages with profanity', category: 'Messaging', icon: '🛡️', status: 'available' },
  { id: '6', name: 'Pre-Purchase Messages', description: 'Send messages before checkout', category: 'Messaging', icon: '💬', status: 'available' },

  // Grow Your List
  { id: '7', name: 'List Imports', description: 'Import your existing customer list', category: 'Grow Your List', icon: '📋', status: 'connected', featured: true },
  { id: '8', name: 'QR Code', description: 'Generate QR code customers can scan', category: 'Grow Your List', icon: '📱', status: 'available', featured: true },
  { id: '9', name: 'Website Popup', description: 'Capture visitors with popup forms', category: 'Grow Your List', icon: '🌐', status: 'setup' },
  { id: '10', name: 'Website Embed', description: 'Embed signup forms on your site', category: 'Grow Your List', icon: '💻', status: 'available' },
  { id: '11', name: 'Integrate External Forms', description: 'Connect your existing forms', category: 'Grow Your List', icon: '🔗', status: 'available' },

  // Onboarding Experience
  { id: '12', name: 'Reply Y', description: 'Create drip sequences for new members', category: 'Onboarding Experience', icon: '✅', status: 'available', featured: true },
  { id: '13', name: 'Custom Signup Fields', description: 'Collect custom data during signup', category: 'Onboarding Experience', icon: '📝', status: 'setup' },
  { id: '14', name: 'Custom Branded Signup', description: 'Create branded signup experiences', category: 'Onboarding Experience', icon: '🎨', status: 'available' },
  { id: '15', name: 'Welcome Series', description: 'Send a series of welcome messages', category: 'Onboarding Experience', icon: '👋', status: 'connected' },

  // Developer Tools & Integrations
  { id: '16', name: 'API', description: 'Programmatically send messages and manage lists', category: 'Developer Tools & Integrations', icon: '⚡', status: 'available', featured: true },
  { id: '17', name: 'Zapier', description: 'Connect to 2000+ apps via Zapier', category: 'Developer Tools & Integrations', icon: '🔧', status: 'connected', popular: true },
  { id: '18', name: 'Shopify', description: 'Integrate with your Shopify store', category: 'Developer Tools & Integrations', icon: '🛍️', status: 'connected' },
  { id: '19', name: 'Salesforce', description: 'Sync your customer data', category: 'Developer Tools & Integrations', icon: '☁️', status: 'available' },

  // Reporting & Tracking
  { id: '20', name: 'UTM Tracking', description: 'Track link performance', category: 'Reporting & Tracking', icon: '📈', status: 'available', featured: true },
  { id: '21', name: 'Data Exports', description: 'Export your community data', category: 'Reporting & Tracking', icon: '📊', status: 'connected' },

  // Other Features
  { id: '22', name: 'iOS App', description: 'Download the Community iOS app', category: 'Other Features', icon: '📱', status: 'available' },
  { id: '23', name: 'Dark Mode', description: 'Switch your dashboard appearance', category: 'Other Features', icon: '🌙', status: 'connected' }
];

const categories = [
  'Messaging',
  'Grow Your List', 
  'Onboarding Experience',
  'Developer Tools & Integrations',
  'Reporting & Tracking',
  'Other Features'
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(categories);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSection = (category: string) => {
    setExpandedSections(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredAddOns = addOns.filter(addon => {
    const matchesSearch = addon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         addon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         addon.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = statusFilter === 'all' || 
                         (statusFilter === 'installed' && addon.status === 'connected') ||
                         (statusFilter === 'available' && addon.status === 'available') ||
                         (statusFilter === 'popular' && addon.popular);
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200"><Check className="w-3 h-3 mr-1" />Connected</Badge>;
      case 'setup':
        return <Badge variant="outline" className="text-orange-600 border-orange-200">Set Up</Badge>;
      default:
        return <Badge variant="outline" className="text-gray-600">Available</Badge>;
    }
  };

  const connectedAddOns = addOns.filter(addon => addon.status === 'connected').length;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6 flex items-center">
                  <SidebarTrigger className="mr-4" />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Get the Most Out of Community</h1>
                    <p className="mt-1 text-sm text-gray-500">Enhance your community with powerful add-ons and integrations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Banner */}
            <div className="bg-blue-50 border-b border-blue-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm text-blue-700">SMS Credits Remaining: <span className="font-semibold">350</span></span>
                    <span className="text-sm text-green-700">{connectedAddOns} Add-ons Connected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Search and Filters */}
              <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search add-ons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant={statusFilter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('all')}
                  >
                    All
                  </Button>
                  <Button
                    variant={statusFilter === 'installed' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('installed')}
                  >
                    Installed
                  </Button>
                  <Button
                    variant={statusFilter === 'available' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('available')}
                  >
                    Available
                  </Button>
                  <Button
                    variant={statusFilter === 'popular' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('popular')}
                  >
                    Most Popular
                  </Button>
                </div>
              </div>

              {/* Add-ons Sections */}
              <div className="space-y-8">
                {categories.map(category => {
                  const categoryAddOns = filteredAddOns
                    .filter(addon => addon.category === category)
                    .sort((a, b) => {
                      if (a.featured && !b.featured) return -1;
                      if (!a.featured && b.featured) return 1;
                      return 0;
                    });

                  if (categoryAddOns.length === 0) return null;

                  const isExpanded = expandedSections.includes(category);

                  return (
                    <div key={category} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(category)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100 md:cursor-default md:hover:bg-white"
                      >
                        <h2 className="text-lg font-semibold text-gray-900">{category}</h2>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {categoryAddOns.length}
                          </Badge>
                          <ChevronDown 
                            className={`w-4 h-4 text-gray-500 transition-transform md:hidden ${
                              isExpanded ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Section Content */}
                      <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {isLoading ? (
                            // Skeleton loader
                            Array.from({ length: 4 }).map((_, i) => (
                              <div key={i} className="animate-pulse">
                                <div className="bg-gray-100 rounded-lg p-4 space-y-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                                    <div className="flex-1 space-y-2">
                                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            categoryAddOns.map(addon => (
                              <Card 
                                key={addon.id} 
                                className="group hover:shadow-md transition-all duration-200 hover:border-blue-200 cursor-pointer relative"
                                title="Click to view setup details"
                              >
                                <CardContent className="p-4">
                                  <div className="flex items-start space-x-3">
                                    <div className="text-2xl">{addon.icon}</div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2 mb-1">
                                        <h3 className="font-medium text-gray-900 truncate">{addon.name}</h3>
                                        {addon.featured && (
                                          <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200 text-xs">
                                            Featured
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{addon.description}</p>
                                      
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                          {getStatusBadge(addon.status)}
                                        </div>
                                        
                                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                          <Button size="sm" variant="ghost" className="text-xs">
                                            <ExternalLink className="w-3 h-3 mr-1" />
                                            Learn More
                                          </Button>
                                          <Button size="sm" variant="outline" className="text-xs">
                                            <Settings className="w-3 h-3 mr-1" />
                                            Configure
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* No Results */}
              {filteredAddOns.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No add-ons found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
