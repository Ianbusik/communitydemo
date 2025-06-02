
import React, { useState } from 'react';
import { Search, Filter, MessageCircle, Clock, CheckCheck } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contacts = [
  { id: 1, name: 'Ben', message: 'sync', time: 'Tuesday', avatar: 'B', unread: 2, status: 'online', lastSeen: '2 min ago' },
  { id: 2, name: 'Cameron', message: 'cam test', time: '5/14/25', avatar: 'C', unread: 0, status: 'away', lastSeen: '1 hour ago' },
  { id: 3, name: 'Larry', message: 'https://ffw.com/community.com/CQ2BC16q', time: '4/19/25', avatar: 'L', unread: 1, status: 'offline', lastSeen: '2 days ago' },
  { id: 4, name: 'Ayomide Aregbede', message: 'yeah, it works', time: '10/15/24', avatar: 'AA', unread: 0, status: 'online', lastSeen: 'now' },
  { id: 5, name: 'Arthi Rad', message: 'completed', time: '7/2/24', avatar: 'AR', unread: 3, status: 'online', lastSeen: '5 min ago' },
  { id: 6, name: 'James Gómatos', message: '', time: '2/2/24', avatar: 'JG', unread: 0, status: 'away', lastSeen: '3 hours ago' },
  { id: 7, name: 'Aki Colovic', message: 'Hey', time: '1/2/24', avatar: 'AC', unread: 0, status: 'offline', lastSeen: '1 week ago' },
  { id: 8, name: 'Jay Holland', message: 'Content', time: '10/13/23', avatar: 'JH', unread: 0, status: 'online', lastSeen: '10 min ago' },
  { id: 9, name: 'Joey Vadsala', message: 'On list Steve', time: '8/10/23', avatar: 'JV', unread: 0, status: 'away', lastSeen: '2 hours ago' },
  { id: 10, name: 'John Baylor', message: 'This is only a test', time: '8/10/23', avatar: 'JB', unread: 1, status: 'offline', lastSeen: '5 days ago' },
  { id: 11, name: 'Natalie', message: '', time: '8/5/23', avatar: 'N', unread: 0, status: 'online', lastSeen: '30 min ago' },
  { id: 12, name: 'João', message: 'Testing a GIF with MMS enabled', time: '6/2/23', avatar: 'J', unread: 0, status: 'away', lastSeen: '4 hours ago' },
  { id: 13, name: 'Luke', message: 'Hey', time: '6/8/23', avatar: 'L', unread: 0, status: 'offline', lastSeen: '2 weeks ago' },
  { id: 14, name: 'Alec Rubin', message: 'Ur the coolest', time: '6/2/23', avatar: 'AR', unread: 0, status: 'online', lastSeen: '1 hour ago' },
  { id: 15, name: 'Karl Matthias', message: 'Hi Stevie', time: '2/8/23', avatar: 'KM', unread: 0, status: 'offline', lastSeen: '1 month ago' }
];

interface ContactListProps {
  selectedContact: any;
  onSelectContact: (contact: any) => void;
}

export const ContactList: React.FC<ContactListProps> = ({ selectedContact, onSelectContact }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalUnread = contacts.reduce((sum, contact) => sum + contact.unread, 0);
  const onlineCount = contacts.filter(contact => contact.status === 'online').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
            <p className="text-sm text-gray-600">{onlineCount} online • {totalUnread} unread</p>
          </div>
          <div className="flex items-center gap-2">
            {totalUnread > 0 && (
              <Badge variant="default" className="bg-blue-500">
                {totalUnread}
              </Badge>
            )}
            <MessageCircle className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        
        {/* Enhanced Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-10 bg-white border-gray-200 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="hover:bg-blue-50">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Enhanced Contact List */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-4 border-b border-gray-50 cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
              selectedContact?.id === contact.id 
                ? 'bg-blue-100 border-l-4 border-l-blue-500 shadow-sm' 
                : 'hover:shadow-sm'
            }`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="flex items-start gap-3">
              {/* Enhanced Avatar */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-sm font-semibold">{contact.avatar}</span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(contact.status)} rounded-full border-2 border-white`}></div>
              </div>
              
              {/* Enhanced Contact Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                  <div className="flex items-center gap-1">
                    {contact.unread > 0 && (
                      <Badge variant="secondary" className="bg-blue-500 text-white text-xs px-2 py-1">
                        {contact.unread}
                      </Badge>
                    )}
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate mb-1">{contact.message || 'No recent message'}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{contact.lastSeen}</span>
                  {contact.status === 'online' && (
                    <CheckCheck className="h-3 w-3 text-green-500 ml-auto" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
