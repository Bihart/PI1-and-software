import React from 'react';

function Sensor({data})
{
  return (
    <ul className="list-decimal">
      {data.map( ({ID, type_id, price, type, company, name}) => {
        return (
          <li>Name: {name}
            <ul key={ID} className="list-disc">
              <li>Type id: {type_id}</li>
              <li>Price: {price}</li>
              <li>Type: {type}</li>
              <li>Company: {company}</li>
            </ul>
          </li>
        )})}
      {/* {JSON.stringify(data)} */}
    </ul>
  );
}

export { Sensor };
