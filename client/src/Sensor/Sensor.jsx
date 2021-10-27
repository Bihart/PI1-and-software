import React from 'react';

function Sensor(props) {
    return (
        <tr>
          {props.items.map( item => (<td>{item}</td>))}
        </tr>
    );
}

export { Sensor };
