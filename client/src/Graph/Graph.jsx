import React, { Fragment, useState } from 'react';
import { GraphButton } from '../GraphButton/GraphButton';
import { Sensor  } from '../Sensor/Sensor';
import { Histogram } from '../Histogram/Histogram';

async function fetchData()
{
  const host = 'http://localhost:5000/api' // client whit server
  // const host = '../../data.json'; // client without server

  const response = await fetch(host);
  console.log(response);

  if(!response.ok)
  {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data_petition = await response.json();

  return data_petition;
};

const renderThing = (state, {sensors, isFetch}) => {
  if(!isFetch)
    return ( <svg id="histograma"></svg> );
  switch (state) {
    case "sensor":
      return <Sensor data={sensors}/>;
    case "histogram":
      return <Histogram data={sensors.map(item => item['price'])} />;
    default:
      return undefined;
  }
};

function Graph(){

  const [ data, setData ] = useState
  ({
    sensors: [],
    isFetch: false
  });

  const [ state, setState ] = useState("");

  async function showData()
  {
    const data_petition = await fetchData();

    if(!data.isFetch)
      setData({
        sensors: [...data_petition],
        isFetch: true
      });

    if(state !== "sensor")
      setState("sensor")
  };

  async function showHistogram()
  {
    const data_petition = await fetchData();
    if(!data.isFetch)
      setData({
        sensors: [...data_petition],
        isFetch: true
      });
    if(state !== "histogram")
      setState("histogram")
  };

  return (
    <Fragment>
      <div id="botonesxd" className="flex">
        <GraphButton onClick={showData} text="Lista de sensores" />
        <GraphButton onClick={showHistogram} text="Mostrar histograma" />
      </div>
      {renderThing(state, data)}
    </Fragment>
  )
}

export { Graph };
