import React, { Fragment, useState } from 'react';
import { GraphButton } from '../GraphButton/GraphButton';
import { Sensor  } from '../Sensor/Sensor';
import { Histogram } from '../Histogram/Histogram';
import { ScatterPlot } from '../ScatterPlot/ScatterPlot';

async function fetchData(type_of_fetch)
{
  let host = ""
  switch (type_of_fetch) {
  case "test":
    host = "../../data.json";
    break;
  case "groups":
    host = "http://localhost:5000/resultado";
    break;
  case "sensors":
  case "histogram":
    host = "http://localhost:5000/api";
    break;
  default:
    host = "../../data.json";
  }
  const response = await fetch(host);

  if(!response.ok)
  {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data_petition = await response.json();

  return data_petition;
};
const renderThing = (
  state,
  {sensors, isFetch},
  {groups, isFetch_1}) => {
    if( state === "sensor" || state === "histogram" ){
      if(!isFetch)
        return null;
      switch (state) {
      case "sensor":
        return <Sensor data={sensors}/>;
      case "histogram":
        return <Histogram data={sensors.map(item => item['price'])} />;
      default:
        return null;
      }
    }
    else
    {
      if(!isFetch_1)
        return null;
      return  <ScatterPlot data={groups} />;
    }
  };

function Graph(){

  const [ data, setData ] = useState
  ({
    sensors: [],
    isFetch: false
  });

  const [ groups, setGroups ] = useState({
    groups: [],
    isFetch_1: false
  })

  const [ state, setState ] = useState("");

  async function showThing(e)
  {
    const new_value  = e.target.value;
    let data_petition = null;

    if( new_value === "sensor" || new_value === "histogram"){
      data_petition = await fetchData(new_value);
      if(!data.isFetch)
        setData({
          sensors: [...data_petition],
          isFetch: true
        });
    }
    else
    {
      if(!groups.isFetch_1)
        data_petition = await fetchData("groups");
        setGroups({
          groups: [...data_petition],
          isFetch_1: true
        });
    }
    if(state !== new_value)
      setState(new_value);
  };

  return (
    <Fragment>
      <div id="botonesxd" className="flex">
        <GraphButton onClick={showThing}
                     text="List of the sensors"
                     value="sensor"/>
        <GraphButton onClick={showThing}
                     text="Show the Histogram"
                     value="histogram"/>
        <GraphButton onClick={showThing}
                     text="Show the Scatter Plot"
                     value="scatterPlot"/>
      </div>
      {renderThing(state, data, groups)}
    </Fragment>
  )
}

export { Graph };
