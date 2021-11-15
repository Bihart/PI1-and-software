import React, { Fragment, useState, useEffect } from 'react';
import { GraphButton } from '../GraphButton/GraphButton';
import { Sensor  } from '../Sensor/Sensor';
import { Histogram } from '../Histogram/Histogram';
import { ScatterPlot } from '../ScatterPlot/ScatterPlot';

const useClusters = (nCluster, upperNumber) => {
  const [nClusters, setnClusters] = useState(nCluster);

  const changeNClusters = (newNCluster) => {
    newNCluster > 20 || newNCluster < 3 ?
      setnClusters(3) :
      setnClusters(newNCluster);
  }

  return [nClusters, changeNClusters ]
}

const renderThing = (state, data, groups, nClusters, handleOnChange) => {
  switch (state) {
  case "sensor":
    return <Sensor data={data}/>;
  case "histogram":
    return <Histogram data={data.map(item => item['price'])} />;
  case "groups":
      return  (
        <ScatterPlot data={groups}
                     nClusters={nClusters}
                     onChange={handleOnChange}/>
      );
  default:
    return undefined;
  }
};

function Actions({data}) {

  const [ state, setState ] = useState("");
  const [ groups, setGroups ] = useState([]);
  const [ nClusters, setNClusters ] = useClusters(3);


  function handleOnChange (e) {
    console.log(this);
    const newNumberOfClusters = e.target.value;
    setNClusters(newNumberOfClusters)
  };

  useEffect(() => {

    const host = 'http://localhost:5000/grupos'
    const petition = {
      method: 'POST',
      body: JSON.stringify({
        n_clusters: parseInt(nClusters, 10),
        data: [...data]
      })
    }

    fetch(host , petition)
      .then(res => res.json())
      .then(data => setGroups(data));
  }, [data, nClusters] );

  const showThing = (e) => {
    const new_value = e.target.value;

    if(new_value === state)
      return undefined

    setState(new_value)
  }

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
                     value="groups"/>
      </div>
      {renderThing(state, data, groups, nClusters,  handleOnChange)}
    </Fragment>
  )
};

export { Actions };
