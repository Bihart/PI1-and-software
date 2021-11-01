import React, { Fragment, useState } from 'react';
import { Sensor  } from '../Sensor/Sensor';

function Graph(){

  const [ data, setData ] = useState({ sensors: [], isFetch: false});

  async function showData()
  {
    // const host = 'http:localhost:5000/api' // client whit server
    const host = '../../data.json'; // client without server

    const response = await fetch(host);

    if(!response.ok)
    {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data_petition = await response.json();
    // const data_to_text = JSON.stringify(data);
    if(!data.isFetch)
    {
      setData({sensors: [...data_petition], isFetch: true});
    }
  };

  const renderSensor = ({sensors, isFetch}) => { return !isFetch ? undefined : <Sensor data={sensors}/> }

  return (
    <Fragment>
      <button className="bg-blue-400 px-2 py-4"
            onClick={showData}>
        Graph the info
      </button>
      {renderSensor(data)}
    </Fragment>
  )
}

export { Graph };
