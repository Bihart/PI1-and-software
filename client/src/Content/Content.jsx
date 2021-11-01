import React  from 'react';
import { Info } from '../Info/Info'
import { Form } from '../Form/Form'
import { Graph } from '../Graph/Graph'

function Content(props) {

  const currentView = ({view}) => {
    if(view === 'Info')
      return <Info />;
    if(view === 'Home')
      return <Form />;
    if(view === 'Graph')
      return <Graph />;
  }

  return (
    <div className="w-60">
        {currentView(props)}
    </div>
  )

}
export { Content };
