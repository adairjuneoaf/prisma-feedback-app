// Main Dependencies
import React, { Fragment, useContext } from "react";
import PropsTypes from "prop-types";

// Styled Dependencies
import { FiTrash } from "react-icons/fi";

// Contexts Dependencies
import { FeedbackManagement } from "../contexts/contextFeedbackManagement";

export const FeedbackCardItemComponent = ({ id, ratingFeedback, descriptionFeedback }) => {
  const { handleDeleteFeedbackById } = useContext(FeedbackManagement);

  return (
    <Fragment>
      <div className="card">
        <div className="num-display">{ratingFeedback}</div>
        <button
          className="trash"
          title="Excluir o feedback"
          onClick={() => {
            handleDeleteFeedbackById(id);
          }}
        >
          <FiTrash fontSize={14} color={"#fe6701"} />
        </button>
        <div className="text-display">{descriptionFeedback}</div>
      </div>
    </Fragment>
  );
};

// Default Values of Properties
FeedbackCardItemComponent.defaultProps = {
  id: 0,
  ratingFeedback: 0,
  descriptionFeedback: "Description default feedback",
};

// Typings Properties
FeedbackCardItemComponent.propsTypes = {
  id: PropsTypes.number.isRequired,
  ratingFeedback: PropsTypes.number.isRequired,
  descriptionFeedback: PropsTypes.string.isRequired,
};
