import React, { Fragment } from 'react';
import { Sensor  } from '../Sensor/Sensor';

async function fetchData(host) {

  const response = await fetch(host);

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return response.json();
}

async function showData(){
  const host = '../../data.json' // client without server
  // const host = 'http:localhost:5000/api' // client whit server
  const data = await fetchData(host)

  console.log(data);
};

function Graph(){
  return (
    <Fragment>
      <button className="bg-blue-400 px-2 py-4"
              onClick={showData}>
        Graph the info
      </button>
      <ul>
      </ul>
    </Fragment>
  )
}

export { Graph };
