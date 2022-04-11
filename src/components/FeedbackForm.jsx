// Main Dependencies
import React, { Fragment, useRef, useState } from "react";
import { ButtonComponent } from "./Button";

// Contexts Dependencies

export const FeedbackFormComponent = () => {
  const [userFeedback, setUserFeedback] = useState({});
  const descriptionFeedback = useRef(null);

  console.log(userFeedback);

  const handleSubmitMyFeedback = (event) => {
    event.preventDefault();

    if (descriptionFeedback.current.value.trim() === "" || descriptionFeedback.current.value.length <= 8) {
      return console.log("Description invalid!");
    }

    setUserFeedback(descriptionFeedback.current.value);
    console.log(descriptionFeedback.current.value);
  };

  return (
    <Fragment>
      <div className="card">
        <form onSubmit={handleSubmitMyFeedback}>
          <h2>Qual o seu nível de satisfação com o nosso serviço?</h2>
          <div className="input-group">
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Deixe aqui o seu feedback..."
              ref={descriptionFeedback}
            />
            <ButtonComponent type="submit" version="secondary">
              Enviar
            </ButtonComponent>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
