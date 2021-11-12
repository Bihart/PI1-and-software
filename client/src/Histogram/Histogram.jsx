import React, { Fragment, useRef, useEffect, useState } from 'react';
import { setup, update } from './DrawerHistogram'

function useNBins(numberBins) {
  const [nBins, setnBins ] = useState(numberBins);

  const changeNumberBins = (newNumberBins) => {
    newNumberBins > 100 || newNumberBins < 1 ?
      setnBins(20) :
      setnBins(newNumberBins);
  }

  return [nBins, changeNumberBins]
}

function Histogram({data}) {

  const plot1 = useRef(null);
  const needles = useRef([]);

  const [nBins, setNBins ] = useNBins(20);

  useEffect(() => {
    needles.current  = setup(plot1, data);
    update(data, nBins, needles.current);
  }, [] );

  useEffect(() => {
    update(data, nBins, needles.current);
  }, [data, nBins]);

  const handleOnChange = (e) => {
    const newNumberOfBinds = e.target.value;
    setNBins(newNumberOfBinds)
  }

  return (
    <Fragment>
      <div ref={plot1}></div>
      <p>
        <label># bins</label>
        <input type="number"
               min="1"
               max="20"
               step="4"
               value={nBins}
               id="nBin"
               onChange={handleOnChange}
        />
      </p>
    </Fragment>
  );
}

export { Histogram };
