// Main Dependencies
import React, { Fragment, useState } from "react";

// Contexts Dependencies


export const FeedbackForm = () => {
  const [userFeedback, setUserFeedback] = useState({})

  console.log(userFeedback)

  return (
    <Fragment>
      <div className="card">
        <form>
          <h2>Qual o seu nível de satisfação com o nosso serviço?</h2>
          <div className="input-group">
            <input type="text" name="description" id="description" placeholder="Deixe aqui o seu feedback..." onChange={({target})=>{
              setUserFeedback((data)=>({...data, description: target.value}))
            }}/>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}
