import React from 'react';

function GenerateData({onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="n_data">
        Seleccione el número de datos que quiere usar:
      </label>
      <input type="number"
             id="n_data"
             name="n_data"
             step="1"
             min="3"
             max="10000"
             className="m-1"
             required/>
      <button
        className="bg-red-300 p-1 hover:bg-red-400">
        Request
      </button>
    </form>
  );
}

export { GenerateData };
