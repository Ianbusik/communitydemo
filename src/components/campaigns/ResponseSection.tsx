
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const ResponseSection: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Responses</CardTitle>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <div className="text-gray-500 font-medium">No Responses Yet</div>
          <div className="text-sm text-gray-400 mt-1">Responses will appear here</div>
        </div>
      </CardContent>
    </Card>
  );
};
