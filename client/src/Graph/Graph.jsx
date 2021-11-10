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
    const data = await fetch(`http://localhost:5000/api?n_data=${n_data}`)
          .then(res => res.json())

    setData({
      sensors: [...data],
      isFetch: true
    });

    console.log(data);
    document.getElementById("n_data").value = "";
  }

  return (

    <Fragment>
      <GenerateData onSubmit={anyThing} />
      <Actions data={data.sensors} isActive={data.isFetch}/>
    </Fragment>
  )
}

export { Graph };
