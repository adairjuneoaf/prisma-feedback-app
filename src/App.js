// Main Dependencies
import React from "react";

// Components Dependencies
import { HeaderComponent } from "./components/Header";
import { FeedbackListComponent } from "./components/FeedbackList";

// Contexts Dependencies
import { FeedbackManagementProvider } from "./contexts/FeedbackManagementContext";

export const App = () => {
  return (
    <FeedbackManagementProvider>
      <HeaderComponent text="Prisma Feedback" />
      <div className="container">
        <FeedbackListComponent />
      </div>
    </FeedbackManagementProvider>
  );
};
