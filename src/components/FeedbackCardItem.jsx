// Main Dependencies
import React, { Fragment } from "react";
import PropsTypes from "prop-types";

export const FeedbackCardItemComponent = ({ id, ratingFeedback, descriptionFeedback }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="num-display">{ratingFeedback}</div>
        <div className="text-display">{descriptionFeedback}</div>
      </div>
    </Fragment>
  );
};

FeedbackCardItemComponent.defaultProps = {
  ratingFeedback: 0,
  descriptionFeedback: "Description default feedback",
};

FeedbackCardItemComponent.propsTypes = {
  id: PropsTypes.number.isRequired,
  ratingFeedback: PropsTypes.number.isRequired,
  descriptionFeedback: PropsTypes.string.isRequired,
};
