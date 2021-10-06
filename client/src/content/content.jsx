import React from 'react';
import { Info } from '../info/info'

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainContent: "Info"
    }
  }

  setState(){
    if(this.state.mainContent === "Info"){
        return  {
          mainContent:  "Form"
        }
    } else {
        return  {
          mainContent:  "Info"
        }
    }
  }

  render() {
    return (
      <p>
        RAIN es una aplicaión que desea ayudar a personas que
        viven del agro y quieren automatizar el sistema de
        ragado, ya sea que esten empezando o que quieran aúmentar
        el número de nodos que tiene a un coste optimo. Esto se
        hace usando Machine Learning.
      </p>
    );
  }
}

export { Content };
