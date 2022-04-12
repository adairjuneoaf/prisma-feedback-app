// Main Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Contexts Dependencies

// Components Dependencies
import { Input } from "./Input";
import { Rating } from "./Rating";
import { Button } from "./Button";

export const FeedbackForm = () => {
  const [userFeedback, setUserFeedback] = useState({
    rating: PropTypes.number,
    description: PropTypes.string,
  });

  const handleSubmitMyFeedback = (event) => {
    event.preventDefault();

    if (String(userFeedback.description).trim() === "" || String(userFeedback.description).length <= 8) {
      return console.log("Description invalid!");
    }

    if (userFeedback.rating < 0 || userFeedback.rating > 10) {
      return console.log("Rating selected invalid!");
    }

    return console.log(userFeedback);
  };

  return (
    <Fragment>
      <div className="card">
        <h2>Qual o seu nível de satisfação com o nosso serviço?</h2>
        <form onSubmit={handleSubmitMyFeedback}>
          <Rating
            rating={(number) => {
              setUserFeedback((data) => ({ ...data, rating: number }));
            }}
          />
          <div className="input-group">
            <Input
              description={(text) => {
                setUserFeedback((data) => ({ ...data, description: text }));
              }}
            />
            <Button type="submit" version="secondary">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
