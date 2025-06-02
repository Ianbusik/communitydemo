
import React from 'react';
import { MessageInput } from './MessageInput';

const messages = [
  { id: 1, text: "Hey Ayomide! What's good, Ayomide?", sent: false, time: "Thu, Oct 20, 2022, 4:21 PM" },
  { id: 2, text: "Testing campaigns. Please ignore.", sent: false, time: "Thu, Dec 22, 2022, 5:20 AM" },
  { id: 3, text: "Hey friends this is a test", sent: false, time: "Fri, Jan 27, 2023, 3:00 AM" },
  { id: 4, text: "tester", sent: true, time: "Wed, Feb 15, 2023, 9:37 AM" },
  { id: 5, text: "remember", sent: true, time: "Wed, Jun 14, 2023, 2:38 PM" },
  { id: 6, text: "Hey Ayomide, this is another test. Hope you're fine!", sent: false, time: "Wed, Jun 21, 2023, 4:48 AM" },
  { id: 7, text: "This is a test campaign", sent: false, time: "Thu, Aug 10, 2023, 8:04 AM" },
  { id: 8, text: "Hope you have an awesome day! 🎉", sent: false, time: "Thu, Aug 10, 2023, 10:28 AM" },
  { id: 9, text: "yes, I did", sent: true, time: "Tue, Oct 15, 2024, 7:53 AM" },
  { id: 10, text: "how are you?", sent: false, time: "" },
  { id: 11, text: "yeah, it works", sent: true, time: "" },
  { id: 12, text: "did you get this too?", sent: false, time: "" },
  { id: 13, text: "I'm good.", sent: true, time: "" },
  { id: 14, text: "testing that token based auth works fine", sent: true, time: "" }
];

interface MessageThreadProps {
  selectedContact: any;
}

export const MessageThread: React.FC<MessageThreadProps> = ({ selectedContact }) => {
  if (!selectedContact) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
          <p className="text-gray-500">Choose a contact to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">{selectedContact.avatar}</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{selectedContact.name}</h2>
              <p className="text-sm text-gray-500">Male • 29 • Los Angeles, CA</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">YouTube</span>
            <button className="bg-black text-white px-3 py-1 rounded text-sm">Details</button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-xs lg:max-w-md">
              {message.time && (
                <div className="text-xs text-gray-500 text-center mb-2">{message.time}</div>
              )}
              <div
                className={`px-4 py-2 rounded-2xl ${
                  message.sent
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};
