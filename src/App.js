import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom' ; 
import Signin from './comps/Signin';
import Title from './comps/Title';
import Home from "./pages/Home"
import './Ap.css'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
function App() { 

  return (
    
    <div className="App">
    <AuthProvider>
        <Router>
        <Switch>  
          
          <Route exact path="/Home">
            <Home userName={'omar'}/>
          </Route>

          <PrivateRoute exact path="/">
            <Title/>
            <Signin/>
          </PrivateRoute>
        </Switch>
        </Router> 
    </AuthProvider>
    </div>

   
    
  );
}

export default App;
