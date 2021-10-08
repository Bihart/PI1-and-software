import React , { useState, Fragment } from 'react';
import { Info } from './Info/Info'
import { Form } from './Form/Form'
import './App.css';

function useView() {
  const [ view, setView ] = useState('Info');

  const changeView = (e) => {
    const newValue = e.target.value;
    setView(newValue);
  }
  return [ view, changeView ]
}

function App() {
  const [ view, chageView ] = useView();

  const currentView = (view) => {
    if(view === 'Info')
      return <Info />;
    if(view === 'Home')
      return <Form />;
  }

  return (
    <Fragment>
      <div class="space-x-4">
        <ul>
          <li class="shadow-sm">
            <input type="button"
                   onClick={chageView}
                   value="Home"/>
          </li>
          <li class="shadow-lg">
            <input type="button"
                   onClick={chageView}
                   value="Info"/>
          </li>
        </ul>
      </div>
      <div class="w-20 h-10 bg-red">
        <form />
        <div>
          {currentView(view)}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
