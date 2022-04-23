// Main Dependecies
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FeedbackManagement = createContext({
  insertNewFeedbackByData: () => {},
  handleDeleteFeedbackById: () => {},
  feedbackList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rating: PropTypes.number,
      description: PropTypes.string,
    })
  ),
});

export const FeedbackManagementProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  const searchAndDeleteFeedbackInList = (id) => {
    let newListFeedbacks = feedbackList.filter((feedback) => feedback.id !== id);

    return setFeedbackList(newListFeedbacks);
  };

  const handleDeleteFeedbackById = (id) => {
    let isConfirmDeleteFeedback = window.confirm("Deseja realmente excluir esse Feedback?");

    if (isConfirmDeleteFeedback) {
      searchAndDeleteFeedbackInList(id);
    }

    return;
  };

  const insertNewFeedbackByData = ({ id, description, rating }) => {
    setFeedbackList([...feedbackList, { id, description, rating }]);
  };

  return (
    <FeedbackManagement.Provider value={{ handleDeleteFeedbackById, feedbackList, insertNewFeedbackByData }}>
      {children}
    </FeedbackManagement.Provider>
  );
};
