import React from 'react';

function Sensor(props) {
  return (
    <li>
      <ul>
        {props.items.map( item => (<li>{item}</li>))}
      </ul>
    </li>
  );
}

export { Sensor };
