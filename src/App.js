import React, { useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Titlee from './comps/Titlee';
import UploadForm from './comps/UploadForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ; 
import Signin from './comps/Signin';
import Title from './comps/Title';

function App() {
  const [selectedImg, setSelectedImg] = useState(null); 



  return (
    <Router>
     
    <div className="App">
    <Switch>
      <Route exact path="/">
      <Titlee/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </Route>

      <Route path="/login">
        <Title/>
        <Signin/>
      </Route>
    </Switch>
    </div>

   
    </Router> 
  );
}

export default App;
