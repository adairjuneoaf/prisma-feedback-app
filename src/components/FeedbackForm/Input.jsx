// Main Dependencies
import React, { Fragment, useRef } from "react";

export const Input = ({ description }) => {
  const descriptionFeedback = useRef("");

  const selectDescriptionFeedback = (event) => {
    description(event.target.value);
  };

  return (
    <Fragment>
      <div className="input-group">
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Deixe aqui o seu feedback..."
          onChange={selectDescriptionFeedback}
          ref={descriptionFeedback}
        />
      </div>
    </Fragment>
  );
};
