import React, { Fragment, useState, useEffect } from 'react';
import { GraphButton } from '../GraphButton/GraphButton';
import { Sensor  } from '../Sensor/Sensor';
import { Histogram } from '../Histogram/Histogram';
import { ScatterPlot } from '../ScatterPlot/ScatterPlot';

const renderThing = (state, data) => {
    switch (state) {
      case "sensor":
        return <Sensor data={data}/>;
      case "histogram":
        return <Histogram data={data.map(item => item['price'])} />;
      case "groups":
        return  <ScatterPlot data={data} />;
    }
  };

function Actions({data}) {




  const [ state, setState ] = useState("");

  const showThing = (e) => {
    const new_value = e.target.value;

    if(new_value === state)
      return undefined

    setState(new_value)
  }

  useEffect(() => {
    const hola = async (arg) => {
      const data = await fetch(
        'http://localhost:5000/grupos',
        {
          method: 'POST',
          body: JSON.stringify(arg)
        })
            .then(res => res.json())

      console.log(data);
    }

    hola(data)
  }, [data] );


  return (
    <Fragment>
        <div className="flex">
          <GraphButton onClick={showThing}
                       text="Lista de sensores"
                       value="sensor"/>
          <GraphButton onClick={showThing}
                       text="Mostrar histograma"
                       value="histogram"/>
          <GraphButton onClick={showThing}
                       text="Mostrar Scatter Plot"
                       value="scatterPlot"/>
      </div>
    {renderThing(state, data)}
    </Fragment>
  )
};

export { Actions };
