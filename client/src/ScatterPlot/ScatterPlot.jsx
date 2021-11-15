import React, { Fragment, useEffect, useRef } from 'react';
import { range,palleteColor } from './util'
import { setup, update } from './DrawerScatterPlot';

function ScatterPlot({data, nClusters, onChange}) {

  const plot = useRef(null);
  const pre_state = useRef([]);

  useEffect(() => {
    pre_state.current = setup(data, plot);
  }, [] );

  useEffect(() => {
    const myColors = ["#ff0000", "#00ff00", "#0000ff"];
    const palleteOfColors = palleteColor(myColors, nClusters);
    console.log(palleteOfColors);
    update(data,
           pre_state.current,
           range(nClusters),
           palleteOfColors
          );
  }, [data] );

  return (
    <Fragment>
      <div ref={plot}></div>
      <p>
        <label># clusters</label>
        <input type="number"
               min="3"
               max={data.length}
               step="2"
               value={nClusters}
               id="numclustrs"
               onChange={onChange}/>
      </p>
    </Fragment>

  );
}

export { ScatterPlot };
