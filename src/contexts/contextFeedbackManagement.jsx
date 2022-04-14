// Main Dependecies
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FeedbackManagement = createContext({
  insertNewFeedbackByData: ({ id, description, rating }) => {},
  handleDeleteFeedbackById: (id) => {},
  idFeedbackDelete: PropTypes.number,
  feedbackList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rating: PropTypes.number,
      description: PropTypes.string,
    })
  ),
});

export const FeedbackManagementProvider = ({ children }) => {
  const [idFeedbackDelete, setIdFeedbackDelete] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleDeleteFeedbackById = (id) => {
    setIdFeedbackDelete(id);
    console.log(id);
  };

  const insertNewFeedbackByData = ({ id, description, rating }) => {
    setFeedbackList([...feedbackList, { id, description, rating }]);
  };

  return (
    <FeedbackManagement.Provider
      value={{ handleDeleteFeedbackById, feedbackList, insertNewFeedbackByData, idFeedbackDelete }}
    >
      {children}
    </FeedbackManagement.Provider>
  );
};
