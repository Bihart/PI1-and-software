import React from 'react';

function Form(){

  const[optimo, setOptimo] = React.useState("")

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target.elements ;
    const host = "http://localhost:5000/optimizator";
    const allInputs = Array.from(form)
                           .filter(({type}) => type === "number");

    const variables = allInputs
          .map(({id,value}) => `${id}=${value}`)
          .join("&");

    for (const item in form) {
      if(form[item].type === "number")
        form[item].value = ""
    }

    const optimuz = await fetch(`${host}?${variables}`)
          .then(res => res.text())

    setOptimo(optimuz);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="metros_cuadrados">
            Metros Cuadrados:
          </label>
          <input type="number"
                 id="metros_cuadrados"
                 name="metros_cuadrados"
                 step="0.5"
                 min="0.5"
                 required/>
          <label htmlFor="presupuesto">
            Presupuesto:
          </label>
          <input type="number"
                 id="presupuesto"
                 name="presupuesto"
                 step="0.001"
                 min="10"
                   required/>
          </div>
          <div>
            <button>Submit</button>
          </div>
      </form>
      {
        optimo === ""?
          undefined : <p>{optimo}</p>
      }
      </div>
    );
}

export { Form };
