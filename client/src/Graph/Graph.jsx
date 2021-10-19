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

function Graph(){
  return (
    <p>
      Graph is work!
    </p>
  )
}

export { Graph };
