
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube } from 'lucide-react';

interface MessagePreviewProps {
  message: string;
  sentDate: string;
}

export const MessagePreview: React.FC<MessagePreviewProps> = ({ message, sentDate }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Your Message</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-500">{sentDate}</div>
          
          <div className="bg-blue-600 text-white p-3 rounded-lg max-w-md ml-auto">
            {message}
          </div>
          
          {/* YouTube Preview */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-md ml-auto">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded">
                <Youtube className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-medium">YouTube</div>
                <div className="text-sm text-gray-600">youtube.com</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
