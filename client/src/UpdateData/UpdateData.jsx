import React from 'react';

function UpdateData({onSubmit})
{
  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="upgrade_file">
          Select the file to send
        </label>
        <input type="file"
               id="upgrade_file"
               name="upgrade_file"
               className="upgrade_file"
               accept=".json"
               required/>
      <button className="bg-red-300 p-1 hover:bg-red-400">
        Submit
      </button>
    </form>
  );
}

export { UpdateData };
