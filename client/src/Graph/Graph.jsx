import React, { Fragment, useState } from 'react';
import { GenerateData } from '../GenerateData/GenerateData'
import { Actions } from '../Actions/Actions'

function Graph(){

  const [ data, setData ] = useState
  ({
    sensors: [],
    isFetch: false
  });

  const anyThing = async (e) => {
    e.preventDefault();
    const n_data = document.getElementById("n_data").value;
    const host = (numberOfData) => `http://localhost:5000/api?n_data=${n_data}`
    const data = await fetch(host(n_data))
          .then(res => res.json())

    setData({
      sensors: [...data],
      isFetch: true
    });

    document.getElementById("n_data").value = "";
  }

  return (
    <Fragment>
      <GenerateData onSubmit={anyThing} />
      {
        data.isFetch?
        <Actions data={data.sensors} isActive={data.isFetch}/> :
        undefined
      }
    </Fragment>
  )
}

export { Graph };
