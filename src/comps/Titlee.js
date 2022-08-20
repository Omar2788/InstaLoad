import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import Signout from "../comps/Signout"
import './Signout.css'

const Titlee = () => {
  return (
    <div className="title">
      <img className='logoPageHome' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/272305165_936123047271302_4115668652240313348_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ivYZbRMye_EAX_O5rKR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWETd4RPEW4ShTd-ycSVr-_esrCn_rqVP4tyRYuvwVvQ&oe=6218A1EC' alt=''></img>
      <Signout/>
  
      <h2>Your Pictures</h2>
      <p>Please upload your pictures here.</p>
    {/*<DeleteIcon/>*/}
    </div>
  )
}

export default Titlee;