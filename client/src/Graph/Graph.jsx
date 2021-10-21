import React from 'react';

async function fetchData(host) {
  const headers = new Headers({
    'Access-Control-Allow-Origin': host
  });

  const init = {
    method: 'GET',
    headers: headers,
    mode: 'cors'
  };

  const response = await fetch(host,init);

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data;
}

const showData = () => {
  fetchData('http://localhost:5000/api').then((data) => {
    // const ans = Object.values(data[3]);
    console.log(data);
  });
};

function Graph(){
  return (

    <button className="bg-blue-400 px-2 py-4"
      onClick={showData}>
      Graph the info
    </button>
  )
}

export { Graph };
