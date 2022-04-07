// Main Dependencies
import React, { Fragment } from "react";

export const FeedbackFormComponent = () => {
  return (
    <Fragment>
      <div className="card">
        <form>
          <h2>Qual o seu nível de satisfação com nossos serviços?</h2>
          <div className="input-group">
            <input type="text" placeholder="Deixa a sua mensagem para o nosso time..." />
            <button type="submit" className="button-send">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
