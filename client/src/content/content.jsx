import React from 'react';
import { Info } from '../info/info'
import { Form } from '../form/form'

class Content extends React.Component {
  render() {
    return (
      <div class="w-20 h-10 bg-red">
        <Info />
        <Form />
      </div>
    );
  }
}

export { Content };
