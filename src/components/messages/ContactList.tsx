
import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Phone, Video } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const contacts = [
  { id: 1, name: 'Ben', message: 'sync', time: 'Tuesday', avatar: 'B', unread: 2, status: 'online' },
  { id: 2, name: 'Cameron', message: 'cam test', time: '5/14/25', avatar: 'C', unread: 0, status: 'offline' },
  { id: 3, name: 'Larry', message: 'https://ffw.com/community.com/CQ2BC16q', time: '4/19/25', avatar: 'L', unread: 1, status: 'online' },
  { id: 4, name: 'Ayomide Aregbede', message: 'yeah, it works', time: '10/15/24', avatar: 'AA', unread: 0, status: 'online' },
  { id: 5, name: 'Arthi Rad', message: 'completed', time: '7/2/24', avatar: 'AR', unread: 3, status: 'away' },
  { id: 6, name: 'James Gómatos', message: '', time: '2/2/24', avatar: 'JG', unread: 0, status: 'offline' },
  { id: 7, name: 'Aki Colovic', message: 'Hey', time: '1/2/24', avatar: 'AC', unread: 0, status: 'online' },
  { id: 8, name: 'Jay Holland', message: 'Content', time: '10/13/23', avatar: 'JH', unread: 0, status: 'offline' },
  { id: 9, name: 'Joey Vadsala', message: 'On list Steve', time: '8/10/23', avatar: 'JV', unread: 0, status: 'away' },
  { id: 10, name: 'John Baylor', message: 'This is only a test', time: '8/10/23', avatar: 'JB', unread: 0, status: 'offline' },
  { id: 11, name: 'Natalie', message: '', time: '8/5/23', avatar: 'N', unread: 0, status: 'online' },
  { id: 12, name: 'João', message: 'Testing a GIF with MMS enabled', time: '6/2/23', avatar: 'J', unread: 0, status: 'offline' },
  { id: 13, name: 'Luke', message: 'Hey', time: '6/8/23', avatar: 'L', unread: 0, status: 'online' },
  { id: 14, name: 'Alec Rubin', message: 'Ur the coolest', time: '6/2/23', avatar: 'AR', unread: 0, status: 'offline' },
  { id: 15, name: 'Karl Matthias', message: 'Hi Stevie', time: '2/8/23', avatar: 'KM', unread: 0, status: 'away' }
];

interface ContactListProps {
  selectedContact: any;
  onSelectContact: (contact: any) => void;
}

export const ContactList: React.FC<ContactListProps> = ({ selectedContact, onSelectContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, unread, online

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filterType === 'all' || 
      (filterType === 'unread' && contact.unread > 0) ||
      (filterType === 'online' && contact.status === 'online');
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  const totalUnread = contacts.reduce((sum, contact) => sum + contact.unread, 0);

  return (
    <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{totalUnread}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Enhanced Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-10 bg-white border-gray-300 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-1">
            {[
              { key: 'all', label: 'All' },
              { key: 'unread', label: 'Unread' },
              { key: 'online', label: 'Online' }
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={filterType === filter.key ? "default" : "ghost"}
                size="sm"
                className="text-xs h-7"
                onClick={() => setFilterType(filter.key)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact List */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedContact?.id === contact.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
            }`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="flex items-start gap-3">
              {/* Enhanced Avatar with Status */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 text-sm font-medium">{contact.avatar}</span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(contact.status)} rounded-full border-2 border-white`}></div>
              </div>
              
              {/* Contact Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{contact.time}</span>
                    {contact.unread > 0 && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{contact.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">{contact.message}</p>
                
                {/* Quick Actions */}
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <Phone className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <Video className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredContacts.length === 0 && (
          <div className="p-8 text-center">
            <div className="text-gray-400 mb-2">
              <Search className="h-8 w-8 mx-auto" />
            </div>
            <p className="text-gray-500 text-sm">No conversations found</p>
          </div>
        )}
      </div>
    </div>
  );
};
