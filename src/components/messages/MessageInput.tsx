
import React, { useState } from 'react';
import { Send, Paperclip, Smile, Image, Mic, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      {/* Typing Indicator */}
      {isTyping && (
        <div className="px-4 py-2 border-b border-gray-100">
          <Badge variant="secondary" className="text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Typing...</span>
            </div>
          </Badge>
        </div>
      )}

      {/* Attachment Menu */}
      {showAttachments && (
        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Photo
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Paperclip className="h-4 w-4" />
              File
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Mic className="h-4 w-4" />
              Voice
            </Button>
          </div>
        </div>
      )}

      {/* Enhanced Input Area */}
      <div className="p-4">
        <div className="flex items-end gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowAttachments(!showAttachments)}
            className={`hover:bg-blue-100 ${showAttachments ? 'bg-blue-100 text-blue-600' : ''}`}
          >
            <Plus className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              placeholder={`Send a message to ${selectedContact?.name || 'Ayomide'}...`}
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full pr-12 py-3"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-100"
            >
              <Smile className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
          
          <Button 
            onClick={handleSend} 
            size="icon"
            disabled={!message.trim()}
            className={`rounded-full transition-all duration-200 ${
              message.trim() 
                ? 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Quick Actions */}
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <span>Press Enter to send, Shift + Enter for new line</span>
          <div className="flex items-center gap-2">
            <span>✓ End-to-end encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
};
