import React from 'react';

const ItemNavBar = ({id, onClick, value}) => (
  <li>
    <input  id={id}
            className="block p-3 h-full w-full m-0 bg-green-100 hover:bg-green-300 cursor-pointer"
            type="button"
            onClick={onClick}
            value={value}/>
  </li>
);

export { ItemNavBar } ;
