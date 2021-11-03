import React from 'react';

function GraphButton({onClick, text}) {
  return (
    <button className="bg-blue-400 px-2 py-4 m-2 flex-1"
            onClick={onClick}>
      {text}
    </button>
  )
};

export { GraphButton };
