import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ; 
import Signin from './comps/Signin';
import Title from './comps/Title';
import Home from "./pages/Home"
import './Ap.css'
function App() { 

  return (
    
     
    <div className="App">
      
    <Router>
    <Switch>
      <Route exact path="/Home">
        <Home/>
      </Route>

      <Route exact path="/">
        <Title/>
        <Signin/>
      </Route>
    </Switch>
    </Router> 
    </div>

   
    
  );
}

export default App;
