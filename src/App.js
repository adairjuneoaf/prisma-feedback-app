// Main Dependencies
import React, { useState } from "react";

// Components Dependencies
import { HeaderComponent } from "./components/Header";
import { FeedbackListComponent } from "./components/FeedbackList";

export const App = () => {
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

  return (
    <>
      <HeaderComponent text="Prisma Feedback" />
      <div className="container">
        <FeedbackListComponent feedbackList={feedbackList} />
      </div>
    </>
  );
};
