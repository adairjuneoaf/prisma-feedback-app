// Main Dependencies
import React, { Fragment, useContext } from "react";

// Components Dependencies
import { FeedbackCardItemComponent } from "./FeedbackCardItem";
import { FeedbackStatsComponent } from "./FeedbackStats";
import { FeedbackFormComponent } from "./FeedbackForm";

// Contexts Dependencies
import { FeedbackManagement } from "../contexts/FeedbackManagementContext";

export const FeedbackListComponent = () => {
  const { feedbackList } = useContext(FeedbackManagement);

  if (!feedbackList || feedbackList.length === 0) {
    return (
      <Fragment>
        <p>Não existem feedbacks para exibir...</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <FeedbackFormComponent />
      <FeedbackStatsComponent />
      {feedbackList.map((data) => (
        <FeedbackCardItemComponent
          key={data.id}
          id={data.id}
          ratingFeedback={data.rating}
          descriptionFeedback={data.description}
        />
      ))}
    </Fragment>
  );
};
