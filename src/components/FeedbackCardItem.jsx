// Main Dependencies
import React, { Fragment, useContext } from "react";
import PropsTypes from "prop-types";

// Styled Dependencies
import { FiTrash } from "react-icons/fi";

// Contexts Dependencies
import { FeedbackManagement } from "../contexts/FeedbackManagementContext";

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

FeedbackCardItemComponent.defaultProps = {
  ratingFeedback: 0,
  descriptionFeedback: "Description default feedback",
};

FeedbackCardItemComponent.propsTypes = {
  id: PropsTypes.number.isRequired,
  ratingFeedback: PropsTypes.number.isRequired,
  descriptionFeedback: PropsTypes.string.isRequired,
};
