import React from 'react';

function Sensor({data})
{
  return (
    <ul className="list-decimal">
      {data.map( ({ID, type_id, price, type, company, name}) => {
        return (
          <li key={ID} >Name: {name}
            <ul className="list-disc">
              <li key="0">Type id: {type_id}</li>
              <li key="1">Price: {price}</li>
              <li key="2">Type: {type}</li>
              <li key="3">Company: {company}</li>
            </ul>
          </li>
        )})}
      {/* {JSON.stringify(data)} */}
    </ul>
  );
}

export { Sensor };
