// Main Dependencies
import React, { Fragment, useContext } from "react";

// Contexts Dependencies
import { FeedbackManagement } from "../contexts/FeedbackManagementContext";

export const FeedbackStatsComponent = () => {
  const { feedbackList } = useContext(FeedbackManagement);

  let averageRatingFeedbacks =
    feedbackList.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackList.length;

  averageRatingFeedbacks = averageRatingFeedbacks.toFixed(1).replace(/[.,]0$/, ""); // Expressão regular utilizada para evitar que o score seja exibido com zeros(0).

  return (
    <Fragment>
      <div className="feedback-stats">
        <h4>
          <span className="highlight">{feedbackList.length}</span> feedbacks coletados
        </h4>
        <h4>
          Rating médio: <span className="highlight">{isNaN(averageRatingFeedbacks) ? 0 : averageRatingFeedbacks} </span>
        </h4>
      </div>
    </Fragment>
  );
};
