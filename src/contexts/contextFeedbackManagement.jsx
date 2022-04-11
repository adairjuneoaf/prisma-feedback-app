// Main Dependecies
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FeedbackManagement = createContext({
<<<<<<< HEAD
  handleDeleteFeedbackById: () => {},
  feedbackList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      description: PropTypes.string,
    })
  ),
=======
  handleDeleteFeedbackById: (id) => {},
  feedbackList: [{}],
>>>>>>> d5468ebe25f85c3f2f67816e8c99922e210bc805
});

export const FeedbackManagementProvider = ({ children }) => {
  const [idFeedbackDelete, setIdFeedbackDelete] = useState(0);
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      rating: 8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptate qui tempora repudiandae suscipit cupiditate alias, dolorum natus consequuntur.",
    },
    {
      id: 2,
      rating: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptate qui tempora repudiandae suscipit cupiditate alias, dolorum natus consequuntur.",
    },
    {
      id: 3,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptate qui tempora repudiandae suscipit cupiditate alias, dolorum natus consequuntur.",
    },
    {
      id: 4,
      rating: 6,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptate qui tempora repudiandae suscipit cupiditate alias, dolorum natus consequuntur.",
    },
    {
      id: 5,
      rating: 9,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptate qui tempora repudiandae suscipit cupiditate alias, dolorum natus consequuntur.",
    },
    {
      id: 6,
      rating: 7,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptate qui tempora repudiandae suscipit cupiditate alias, dolorum natus consequuntur.",
    },
  ]);

  const handleDeleteFeedbackById = (id) => {
    setIdFeedbackDelete(id);
    console.log(id)
  };

  return (
    <FeedbackManagement.Provider
      value={{ handleDeleteFeedbackById, feedbackList }}
    >
      {children}
    </FeedbackManagement.Provider>
  );
};
