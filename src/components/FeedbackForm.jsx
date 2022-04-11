// Main Dependencies
<<<<<<< HEAD
import React, { Fragment, useState } from "react";

// Contexts Dependencies


export const FeedbackForm = () => {
  const [userFeedback, setUserFeedback] = useState({})

  console.log(userFeedback)

=======
import React, { Fragment } from "react";

export const FeedbackFormComponent = () => {
>>>>>>> ec3a8d9b7ff8bb3297f119142d7ff1a25d847f26
  return (
    <Fragment>
      <div className="card">
        <form>
<<<<<<< HEAD
          <h2>Qual o seu nível de satisfação com o nosso serviço?</h2>
          <div className="input-group">
            <input type="text" name="description" id="description" placeholder="Deixe aqui o seu feedback..." onChange={({target})=>{
              setUserFeedback((data)=>({...data, description: target.value}))
            }}/>
            <button type="submit">Enviar</button>
=======
          <h2>Qual o seu nível de satisfação com nossos serviços?</h2>
          <div className="input-group">
            <input type="text" placeholder="Deixa a sua mensagem para o nosso time..." />
            <button type="submit" className="button-send">
              Enviar
            </button>
>>>>>>> ec3a8d9b7ff8bb3297f119142d7ff1a25d847f26
          </div>
        </form>
      </div>
    </Fragment>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> ec3a8d9b7ff8bb3297f119142d7ff1a25d847f26
