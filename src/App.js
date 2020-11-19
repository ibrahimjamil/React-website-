import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import About from './component/About';
import Services from './component/Service';
import Contact from './component/Contact';
import Navbar from './component/Navbar'
import {Switch,Route,Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
