
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Plus, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CampaignAnalyticsProps {
  recipients: number;
}

export const CampaignAnalytics: React.FC<CampaignAnalyticsProps> = ({ recipients }) => {
  return (
    <div className="space-y-6">
      {/* Recipients Info */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">👥</span>
            </div>
            {recipients} Recipients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-600 mb-4">
            {recipients} Members who joined before 02/23/2022
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-1" />
              message
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Plus className="h-4 w-4 mr-1" />
              add to
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reactions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Reactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-2 text-center">
            {['😍', '😊', '😢', '😮', '😡', '👍'].map((emoji, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-lg mb-1">{emoji}</div>
                <div className="text-xs text-gray-500">0</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sentiment */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sentiment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Questions</span>
              <span>-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Thanks</span>
              <span>-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loving</span>
              <span>-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Happy</span>
              <span>-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sad</span>
              <span>-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">No</span>
              <span>-</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Link Clicks */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Link Clicks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-sm text-gray-600">
              22 Members clicked a link within 3 days
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <span className="text-sm">YouTube</span>
              </div>
              <div className="text-xs text-gray-500">
                https://youtu.be/dQw4w9WgXcQ
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-2xl font-bold">30.1%</div>
              <div className="text-sm text-gray-600">Click rate</div>
            </div>
            
            {/* Simple chart representation */}
            <div className="h-20 bg-gray-50 rounded flex items-end justify-end p-2">
              <div className="h-full w-16 bg-blue-500 rounded-sm flex items-end">
                <div className="w-full h-3/4 bg-blue-600 rounded-sm"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
