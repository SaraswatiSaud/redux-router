import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// BrowserRouter interacts with history library and decides what to show on screen
import { BrowserRouter, Route } from 'react-router-dom';

class Hello extends React.Component {
  render(){
    return(<div>Hello</div>)
  }
}

class Goodbye extends React.Component {
  render(){
    return(<div>Goodbye</div>)
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      Header
      <Route path='/hello' component={Hello} />
      <Route path='/goodbye' component={Goodbye} />
    </div>
  </BrowserRouter>
, document.getElementById('root'));
