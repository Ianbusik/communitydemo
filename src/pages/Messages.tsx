
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ContactList } from "@/components/messages/ContactList";
import { MessageThread } from "@/components/messages/MessageThread";

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-1">
          <ContactList 
            selectedContact={selectedContact}
            onSelectContact={setSelectedContact}
          />
          <MessageThread selectedContact={selectedContact} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Messages;
