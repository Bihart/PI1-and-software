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
    const myColors = ["#a0548c", "#20609b", "#92d82b", "#fa7268", "#e02ed9", "#e79abd"];
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
