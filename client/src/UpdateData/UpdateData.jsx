import React from 'react';

function UpdateData({onSubmit})
{
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="upgrade_file">
          Select the file to send
        </label>
        <input type="file"
               id="upgrade_file"
               name="upgrade_file"
               className="upgrade_file"
               accept=".json"
               required/>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export { UpdateData };
