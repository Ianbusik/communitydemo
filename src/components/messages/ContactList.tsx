
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const contacts = [
  { id: 1, name: 'Ben', message: 'sync', time: 'Tuesday', avatar: 'B', unread: false },
  { id: 2, name: 'Cameron', message: 'cam test', time: '5/14/25', avatar: 'C', unread: false },
  { id: 3, name: 'Larry', message: 'https://ffw.com/community.com/CQ2BC16q', time: '4/19/25', avatar: 'L', unread: false },
  { id: 4, name: 'Ayomide Aregbede', message: 'yeah, it works', time: '10/15/24', avatar: 'AA', unread: false },
  { id: 5, name: 'Arthi Rad', message: 'completed', time: '7/2/24', avatar: 'AR', unread: false },
  { id: 6, name: 'James Gómatos', message: '', time: '2/2/24', avatar: 'JG', unread: false },
  { id: 7, name: 'Aki Colovic', message: 'Hey', time: '1/2/24', avatar: 'AC', unread: false },
  { id: 8, name: 'Jay Holland', message: 'Content', time: '10/13/23', avatar: 'JH', unread: false },
  { id: 9, name: 'Joey Vadsala', message: 'On list Steve', time: '8/10/23', avatar: 'JV', unread: false },
  { id: 10, name: 'John Baylor', message: 'This is only a test', time: '8/10/23', avatar: 'JB', unread: false },
  { id: 11, name: 'Natalie', message: '', time: '8/5/23', avatar: 'N', unread: false },
  { id: 12, name: 'João', message: 'Testing a GIF with MMS enabled', time: '6/2/23', avatar: 'J', unread: false },
  { id: 13, name: 'Luke', message: 'Hey', time: '6/8/23', avatar: 'L', unread: false },
  { id: 14, name: 'Alec Rubin', message: 'Ur the coolest', time: '6/2/23', avatar: 'AR', unread: false },
  { id: 15, name: 'Karl Matthias', message: 'Hi Stevie', time: '2/8/23', avatar: 'KM', unread: false }
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

  return (
    <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Messages</h1>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">6</span>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search messages" 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Contact List */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedContact?.id === contact.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
            }`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 text-sm font-medium">{contact.avatar}</span>
              </div>
              
              {/* Contact Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">{contact.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
