
import React, { useState } from 'react';
import { MessageInput } from './MessageInput';
import { Phone, Video, MoreVertical, Search, Info, Archive, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const messages = [
  { id: 1, text: "Hey Ayomide! What's good, Ayomide?", sent: false, time: "Thu, Oct 20, 2022, 4:21 PM", status: 'delivered' },
  { id: 2, text: "Testing campaigns. Please ignore.", sent: false, time: "Thu, Dec 22, 2022, 5:20 AM", status: 'delivered' },
  { id: 3, text: "Hey friends this is a test", sent: false, time: "Fri, Jan 27, 2023, 3:00 AM", status: 'delivered' },
  { id: 4, text: "tester", sent: true, time: "Wed, Feb 15, 2023, 9:37 AM", status: 'read' },
  { id: 5, text: "remember", sent: true, time: "Wed, Jun 14, 2023, 2:38 PM", status: 'read' },
  { id: 6, text: "Hey Ayomide, this is another test. Hope you're fine!", sent: false, time: "Wed, Jun 21, 2023, 4:48 AM", status: 'delivered' },
  { id: 7, text: "This is a test campaign", sent: false, time: "Thu, Aug 10, 2023, 8:04 AM", status: 'delivered' },
  { id: 8, text: "Hope you have an awesome day! 🎉", sent: false, time: "Thu, Aug 10, 2023, 10:28 AM", status: 'delivered' },
  { id: 9, text: "yes, I did", sent: true, time: "Tue, Oct 15, 2024, 7:53 AM", status: 'read' },
  { id: 10, text: "how are you?", sent: false, time: "", status: 'delivered' },
  { id: 11, text: "yeah, it works", sent: true, time: "", status: 'delivered' },
  { id: 12, text: "did you get this too?", sent: false, time: "", status: 'delivered' },
  { id: 13, text: "I'm good.", sent: true, time: "", status: 'sent' },
  { id: 14, text: "testing that token based auth works fine", sent: true, time: "", status: 'sending' }
];

interface MessageThreadProps {
  selectedContact: any;
}

export const MessageThread: React.FC<MessageThreadProps> = ({ selectedContact }) => {
  const [showActions, setShowActions] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  if (!selectedContact) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-12 w-12 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
          <p className="text-gray-500">Choose a contact from the list to start messaging</p>
          <div className="mt-6">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Start New Conversation
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getMessageStatus = (status: string) => {
    switch (status) {
      case 'sending': return '⏳';
      case 'sent': return '✓';
      case 'delivered': return '✓✓';
      case 'read': return '✓✓';
      default: return '';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                <span className="text-gray-700 text-sm font-medium">{selectedContact.avatar}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{selectedContact.name}</h2>
              <p className="text-sm text-green-600">Online • Last seen 2 min ago</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10"
              onClick={() => setShowActions(!showActions)}
            >
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Quick Actions Dropdown */}
        {showActions && (
          <div className="absolute right-4 top-16 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div className="p-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Info className="h-4 w-4 mr-2" />
                Contact Info
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Archive className="h-4 w-4 mr-2" />
                Archive Chat
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Chat
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-xs lg:max-w-md group">
              {message.time && (
                <div className="text-xs text-gray-500 text-center mb-2">{message.time}</div>
              )}
              <div className="relative">
                <div
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    message.sent
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-white text-gray-900 border border-gray-200 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  
                  {/* Message Status */}
                  {message.sent && (
                    <div className="flex items-center justify-end mt-1 gap-1">
                      <span className="text-xs opacity-70">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <span className={`text-xs ${message.status === 'read' ? 'text-blue-200' : 'text-gray-300'}`}>
                        {getMessageStatus(message.status)}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Message Actions */}
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs">
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex items-center gap-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">typing...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <MessageInput selectedContact={selectedContact} />
    </div>
  );
};
