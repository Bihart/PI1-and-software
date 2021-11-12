import React, { Fragment, useEffect, useRef, useState } from 'react';
import { range,palleteColor } from './util'
import { setup, update } from './DrawerScatterPlot';

const useClusters = (nCluster) => {
  const [nClusters, setnClusters] = useState(nCluster);

  const changeNClusters = (newNCluster) => {
    newNCluster > 20 || newNCluster < 3 ?
      setnClusters(3) :
      setnClusters(newNCluster);
  }

  return [nClusters, changeNClusters ]
}


function ScatterPlot({data}) {

  const plot = useRef(null);
  const pre_state = useRef([]);

  const [nClusters, setNClusters] = useClusters(3);

  useEffect(() => {
    pre_state.current = setup(data, plot);
  }, [] );

  useEffect(() => {
    const myColors = ["#0154ff", "#909dff", "#e725ff"];
    update(data,
           pre_state.current,
           range(3),
           palleteColor(myColors));
  }, [data] );

  const handleOnChange = (e) => {
    const newNumberOfClusters = e.target.value;
    setNClusters(newNumberOfClusters)
  };

  return (
    <Fragment>
      <div ref={plot}></div>
      <p>
        <label># clusters</label>
        <input type="number"
               min="3"
               max="20"
               step="2"
               value={nClusters}
               id="nBin"
               onChange={handleOnChange}/>
      </p>
    </Fragment>

  );
}

export { ScatterPlot };
