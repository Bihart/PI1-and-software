import React, { Fragment, useState } from 'react';
import { GenerateData } from '../GenerateData/GenerateData'
import { Actions } from '../Actions/Actions'
import { UpdateData } from '../UpdateData/UpdateData'

function noValidObject(obj){
  const keys = Object.keys(obj);
  return !(keys.includes("ID") &&
       keys.includes("name") &&
       keys.includes("company") &&
       keys.includes("type") &&
       keys.includes("price") &&
       keys.includes("type_id"));
}

function Graph(){

  const [ data, setData ] = useState
  ({
    sensors: [],
    isFetch: false
  });

  const getDataOfServer = async (e) => {
    e.preventDefault();
    const n_data = document.getElementById("n_data").value;
    const host = (numberOfData) => `http:localhost:5000/api?n_data=${n_data}`
    const data = await fetch(host(n_data))
          .then(res => res.json())

    setData({
      sensors: [...data],
      isFetch: true
    });

    document.getElementById("n_data").value = "";
  }

  const sentDataToServer = async (e) => {
    try
    {
      e.preventDefault();
      const input = document.getElementById("upgrade_file");
      const files = input.files;

      if(files.length ===  0)
        throw new Error('No hay  un archivo');

      const file = files[0];

      if(file.type !== "application/json")
        throw new Error("No es un archivo json");

      const content = await file.text();

      const data = JSON.parse(content);
      const noValid = Array.from(data).some(noValidObject);
      if(noValid)
        throw new Error('Un Sensor no es valido');

      setData({
        sensors: [...data],
        isFetch: true
      });
    }
    catch (err)
    {
      if(err instanceof SyntaxError)
        console.error("No se puede parsear el archivo json");
      if(err instanceof TypeError)
        console.error("No es un objeto Sensor");
      if(err instanceof Error)
        console.error(err.message);
    }
  }

  return (
    <Fragment>
      <div className="flex flex-row">
        <div className="border-r-2 border-blue-600 m-2 p-2">
          <h3 className="font-bold text-center text-red-600">
            This section is to update a file with your data.
          </h3>
          <UpdateData onSubmit={sentDataToServer}/>
        </div>
        <div className="m-2 p-2">
          <h3 className="font-bold text-center text-red-600">
            This section is to generate random data.
          </h3>
          <GenerateData onSubmit={getDataOfServer} />
        </div>
      </div>
      {
        data.isFetch?
        <Actions data={data.sensors} isActive={data.isFetch}/> :
        undefined
      }
    </Fragment>
  )
}

export { Graph };
