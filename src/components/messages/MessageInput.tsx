
import React, { useState } from 'react';
import { Send, Paperclip, Smile, Image, Mic, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MessageInputProps {
  selectedContact?: any;
}

export const MessageInput: React.FC<MessageInputProps> = ({ selectedContact }) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      console.log('Sending message:', { message, attachments, to: selectedContact?.name });
      setMessage('');
      setAttachments([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachment = () => {
    // Simulate file selection
    setAttachments([...attachments, 'document.pdf']);
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const emojis = ['😀', '😂', '❤️', '👍', '👎', '😢', '😡', '🎉'];

  return (
    <div className="bg-white border-t border-gray-200">
      {/* Attachments Preview */}
      {attachments.length > 0 && (
        <div className="p-3 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            {attachments.map((attachment, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <Paperclip className="h-3 w-3 text-blue-500" />
                <span className="text-xs text-blue-700">{attachment}</span>
                <button onClick={() => removeAttachment(index)}>
                  <X className="h-3 w-3 text-blue-500 hover:text-blue-700" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="p-3 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                className="text-lg hover:bg-gray-100 rounded p-1"
                onClick={() => {
                  setMessage(message + emoji);
                  setShowEmojiPicker(false);
                }}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Input Area */}
      <div className="p-4">
        <div className="flex items-end gap-3">
          {/* Attachment Actions */}
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10"
              onClick={handleAttachment}
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10"
              onClick={handleAttachment}
            >
              <Image className="h-4 w-4" />
            </Button>
          </div>

          {/* Message Input */}
          <div className="flex-1 relative">
            <Input
              placeholder={`Message ${selectedContact?.name || 'someone'}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-12 border-gray-300 focus:border-blue-500 rounded-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>

          {/* Send/Record Button */}
          {message.trim() || attachments.length > 0 ? (
            <Button 
              onClick={handleSend} 
              className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className={`h-10 w-10 rounded-full ${isRecording ? 'bg-red-500 text-white' : ''}`}
              onClick={toggleRecording}
            >
              <Mic className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Recording Indicator */}
        {isRecording && (
          <div className="flex items-center justify-center mt-3 text-red-500">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm">Recording... Tap to stop</span>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>Press Enter to send</span>
            <span>Shift + Enter for new line</span>
          </div>
          {selectedContact && (
            <span>{selectedContact.name} is online</span>
          )}
        </div>
      </div>
    </div>
  );
};
