import React , { useState, Fragment } from 'react';
import { Content } from './Content/Content'
import './App.css';

function useView() {
  const [ view, setView ] = useState('Info');

  const changeView = (e) => {
    const newValue = e.target.value;
    if( newValue === view) {
      return
    }
    setView(newValue);
  }
  return [ view, changeView ]
}

function App() {
  const [ view, chageView ] = useView();

  return (
    <Fragment>
      <div className="flex flex-row h-screen w-screen">
        <ul className="flex flex-col bg-gray-100 h-1/2 w-1/6">
          <li className="bg-green-100 p-1 hover:bg-green-300 text-center cursor-pointer">
            <input id="Home"
                   className="bg-transparent"
                   type="button"
                   onClick={chageView}
                   value="Home"/>
          </li>
          <li className="bg-green-100 p-1 hover:bg-green-300 text-center cursor-pointer">
            <input id="Info"
                   className="bg-transparent"
                   type="button"
                   onClick={chageView}
                   value="Info"/>
          </li>
          <li className="bg-green-100 p-1 hover:bg-green-300 text-center cursor-pointer">
            <input id="Graph"
                   className="bg-transparent"
                   type="button"
                   onClick={chageView}
                   value="Graph"/>
          </li>
        </ul>
        <div className="bg-gray-200 flex-auto h-1/2 p-10">
          <Content view={view} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
