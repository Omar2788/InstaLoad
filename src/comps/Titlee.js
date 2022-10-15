import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import Signout from "../comps/Signout"
import './Signout.css'

const Titlee = () => {
  return (
    <div className="title">
      <Signout/>
      <h2>Your Pictures</h2>
      <p>Please upload your pictures here.</p>
    {/*<DeleteIcon/>*/}
    </div>
  )
}

export default Titlee;