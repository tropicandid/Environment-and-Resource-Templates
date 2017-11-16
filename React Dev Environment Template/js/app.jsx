/*
	Begin your react.js code here. 
*/

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>My React App!</p>;
  }
}

render(<App/>, document.getElementById('app'));