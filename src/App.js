// Main Dependencies
import React from "react";

// Components Dependencies
import { HeaderComponent } from "./components/Header";
import { FeedbackList } from "./components/FeedbackList";

// Contexts Dependencies
import { FeedbackManagementProvider } from "./contexts/contextFeedbackManagement";

export const App = () => {
  return (
    <FeedbackManagementProvider>
      <HeaderComponent text="Prisma Feedback" />
      <div className="container">
        <FeedbackList />
      </div>
    </FeedbackManagementProvider>
  );
};
