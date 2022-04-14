// Main Dependencies
import React, { Fragment, useContext } from "react";

// Components Dependencies
import { Stats } from "./Stats";
import { CardItem } from "./CardItem";
import { FeedbackForm } from "../FeedbackForm";

// Contexts Dependencies
import { FeedbackManagement } from "../../contexts/contextFeedbackManagement";

export const FeedbackList = () => {
  const { feedbackList } = useContext(FeedbackManagement);

  return (
    <Fragment>
      <FeedbackForm />
      {!feedbackList || feedbackList.length === 0 ? (
        <Fragment>
          <p>Não existem feedbacks para exibir...</p>
        </Fragment>
      ) : (
        <Fragment>
          <Stats />
          {feedbackList.map((data) => (
            <CardItem key={data.id} id={data.id} ratingFeedback={data.rating} descriptionFeedback={data.description} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};
