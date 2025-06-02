
import React from 'react';
import { MessageInput } from './MessageInput';
import { Phone, Video, MoreVertical, Info, Shield, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const messages = [
  { id: 1, text: "Hey Ayomide! What's good, Ayomide?", sent: false, time: "Thu, Oct 20, 2022, 4:21 PM", status: 'delivered' },
  { id: 2, text: "Testing campaigns. Please ignore.", sent: false, time: "Thu, Dec 22, 2022, 5:20 AM", status: 'read' },
  { id: 3, text: "Hey friends this is a test", sent: false, time: "Fri, Jan 27, 2023, 3:00 AM", status: 'read' },
  { id: 4, text: "tester", sent: true, time: "Wed, Feb 15, 2023, 9:37 AM", status: 'delivered' },
  { id: 5, text: "remember", sent: true, time: "Wed, Jun 14, 2023, 2:38 PM", status: 'read' },
  { id: 6, text: "Hey Ayomide, this is another test. Hope you're fine!", sent: false, time: "Wed, Jun 21, 2023, 4:48 AM", status: 'read' },
  { id: 7, text: "This is a test campaign", sent: false, time: "Thu, Aug 10, 2023, 8:04 AM", status: 'read' },
  { id: 8, text: "Hope you have an awesome day! 🎉", sent: false, time: "Thu, Aug 10, 2023, 10:28 AM", status: 'read' },
  { id: 9, text: "yes, I did", sent: true, time: "Tue, Oct 15, 2024, 7:53 AM", status: 'read' },
  { id: 10, text: "how are you?", sent: false, time: "", status: 'delivered' },
  { id: 11, text: "yeah, it works", sent: true, time: "", status: 'read' },
  { id: 12, text: "did you get this too?", sent: false, time: "", status: 'sending' },
  { id: 13, text: "I'm good.", sent: true, time: "", status: 'delivered' },
  { id: 14, text: "testing that token based auth works fine", sent: true, time: "", status: 'read' }
];

interface MessageThreadProps {
  selectedContact: any;
}

export const MessageThread: React.FC<MessageThreadProps> = ({ selectedContact }) => {
  if (!selectedContact) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageInput className="w-12 h-12 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Welcome to Messages</h3>
          <p className="text-gray-600 mb-4">Select a conversation from the list to start messaging with your contacts.</p>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Choose a contact to begin
          </Badge>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'away': return 'text-yellow-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-white to-blue-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-semibold">{selectedContact.avatar}</span>
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white`}></div>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 text-lg">{selectedContact.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Male • 29 • Los Angeles, CA</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className={getStatusColor('online')}>Active now</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-blue-100">
              <Phone className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-blue-100">
              <Video className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-blue-100">
              <Info className="h-5 w-5 text-gray-600" />
            </Button>
            <div className="flex items-center gap-2 ml-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-sm">
                <Star className="h-4 w-4 mr-1" />
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message, index) => {
          const showTime = message.time && (index === 0 || messages[index - 1].time !== message.time);
          
          return (
            <div key={message.id}>
              {showTime && (
                <div className="text-center mb-4">
                  <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {message.time}
                  </span>
                </div>
              )}
              <div className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md ${message.sent ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      message.sent
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white ml-2'
                        : 'bg-white text-gray-800 border border-gray-200 mr-2'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    {message.sent && (
                      <div className="flex items-center justify-end mt-1 text-xs text-blue-100">
                        <span className="mr-1">
                          {message.status === 'sending' && '⏳'}
                          {message.status === 'delivered' && '✓'}
                          {message.status === 'read' && '✓✓'}
                        </span>
                        <span>
                          {message.status === 'sending' && 'Sending...'}
                          {message.status === 'delivered' && 'Delivered'}
                          {message.status === 'read' && 'Read'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};
