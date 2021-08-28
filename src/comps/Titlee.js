import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import Signout from "../comps/Signout"


const Titlee = () => {
  return (
    <div className="title">
      <h1>InstaLoad</h1>
      <Signout/>
      
      <h2>Your Pictures</h2>
      <p>Please upload your pictures here.</p>
    {/*<DeleteIcon/>*/}
    </div>
  )
}

export default Titlee;