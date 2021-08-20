import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import './Signout.css'

const Signout = () => {
  return (
    <div className="signout">
      <p><button class="but" onClick={() => window.location.replace('http://localhost:3000/')}>Sign out</button></p>
    </div>
  )
}

export default Signout;