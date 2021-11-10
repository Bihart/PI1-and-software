import React from 'react';

function GenerateData({onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="n_data">
        Enter the number of data you wnat to use:
      </label>
      <input type="number"
             id="n_data"
             name="n_data"
             step="1"
             min="3"
             max="10000"
             className="m-1"/>
      <button
        className="bg-red-300 p-1">
        Request
      </button>
    </form>
  );
}

export { GenerateData };
