import React , { useState, Fragment } from 'react';
import { Content } from './Content/Content'
import { ItemNavBar } from './ItemNavBar/ItemNavBar'
import './App.css';

function useView() {
  const [ view, setView ] = useState('Info');

  const changeView = (e) => {
    const newValue = e.target.value;
    if( newValue !== view) {
        setView(newValue);
    }
  }
  return [ view, changeView ]
}

function App() {
  const [ view, changeView ] = useView();

  return (
    <Fragment>
      <div className="flex flex-row min-h-screen w-screen">
        <ul className="flex flex-col bg-gray-100 w-1/6">
            <ItemNavBar id="Home"  onClick={changeView} value="Home"/>
            <ItemNavBar id="Info"  onClick={changeView} value="Info"/>
            <ItemNavBar id="Graph" onClick={changeView} value="Graph"/>
        </ul>
        <div className="bg-gray-200 flex-auto p-10 ">
          <Content view={view} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
