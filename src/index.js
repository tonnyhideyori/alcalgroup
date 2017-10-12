import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route} from 'react-router-dom';
import './css/index.css';
import './css/App.css'
import './css/w3.css'
import Service from './components/Service'
import Us from './components/Us'
import App from './components/App';

const Root=()=>{
  return(
  <BrowserRouter>
    <div>
    <Route exact path="/" component={App}/>
    <Route path="/service" component={Service}/ >
    <Route path="/us" component={Us}/>

   </div>
  </BrowserRouter>
);
}

ReactDOM.render(<Root/>, document.getElementById('root'));
