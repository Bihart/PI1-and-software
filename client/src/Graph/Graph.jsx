import React, { Fragment } from 'react';
import { Sensor  } from '../Sensor/Sensor';

async function fetchData(host) {

  const response = await fetch(host);

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data;
}

const showData = () => {
  const host = '../../data.json' // client without server
  // const host = 'http:localhost:5000/api' // client whit server
  // python server direction 'http://localhsot:5000/api'
  fetchData(host).then((data) => {
    // for(const index in data){
    //   const obj = data[index];
    //   for(const prop in obj){
    //     console.log(`${prop}: ${obj[prop]}`)
    //   }
    // }
    for(const item of data){
      console.log(item);
    }
  });
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
