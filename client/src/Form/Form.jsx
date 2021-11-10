import React from 'react';

function Form(){
    return (
        <div>
            <form action="http://localhost:5000/optimizator" method="GET">
              <div>
                <label htmlFor="metros_cuadrados">
                  Metros Cuadrados:
                  <input type="number" id="metros_cuadrados" name="metros_cuadrados"
                         step="0.5" min="0.5" />
                </label>
                <label htmlFor="presupuesto">
                  Presupuesto:
                  <input type="number" id="presupuesto" name="presupuesto"
                         step="0.001" min="10" />
                </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export { Form };
