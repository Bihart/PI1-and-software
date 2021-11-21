import React from 'react';

function Sensor({data})
{
  return (
    <form method="#" class="container">
      <div>
        <label for="upgrade_file">
          Select the file to send
        </label>
        <input type="file"
               id="upgrade_file"
               name="upgrade_file"
               className="upgrade_file"
               accept=".json"/>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export { Sensor };
