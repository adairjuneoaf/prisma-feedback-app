// Main Dependencies
import React, { Fragment, useContext } from "react";
// import PropTypes from "prop-types";

// Components Dependencies
import { FeedbackCardItemComponent } from "./FeedbackCardItem";

// Contexts Dependencies
import { FeedbackManagement } from "../contexts/contextFeedbackManagement";

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

// FeedbackListComponent.defaultProps = {
//   feedbackList: [{}],
// };

// FeedbackListComponent.propTypes = {
//   feedbackList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       description: PropTypes.number.isRequired,
//     })
//   ),
// };
