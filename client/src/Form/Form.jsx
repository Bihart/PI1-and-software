import React from 'react';

function Form(){
    return (
        <div>
            <form action="http://localhost:5000/api" method="POST">
                {/* <div> */}
                {/*     <label htmlFor="upgrade_file"> */}
                {/*       Select the file to send: */}
                {/*         <input type="file" */}
                {/*             id="upgrade_file" */}
                {/*             name="upgrade_file" */}
                {/*             accept=".csv, .json, .xml"/> */}
                {/*     </label> */}
                {/* </div> */}
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
