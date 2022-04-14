// Main Dependencies
import React, { Fragment, useState, useContext } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

// Contexts Dependencies
import { FeedbackManagement } from "../../contexts/contextFeedbackManagement";

// Components Dependencies
import { Input } from "./Input";
import { Rating } from "./Rating";
import { Button } from "./Button";

export const FeedbackForm = () => {
  const { insertNewFeedbackByData } = useContext(FeedbackManagement);

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

    return insertNewFeedbackByData({ ...userFeedback, id: uuid() });
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
