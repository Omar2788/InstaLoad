import React from 'react';
import './Signout.css'
//import { Link  } from 'react-router-dom';
import Swal from 'sweetalert2';
import { firebaseConfig } from '../firebase/config'; ;

const Signout = () => {
  return (
    <div className="signout">
      <button  class="but" onClick={() => firebaseConfig.auth().signOut(),  
      Swal.fire({
            title: 'Are you sure !',
            text: 'Do you want exit !',
            icon: 'question',
            confirmButtonText: 'Yes'
          }     
            ).then((result) => {
              if (result.value){
                window.location.replace('http://localhost:3000/') ;
                // <Link to="/"exact>Sign Out</Link>  ;
              }
          })}>Sign Out
      
          
    </button> 
      {/*<p><button class="but" onClick={() => window.location.replace('http://localhost:3000/')}>Sign out</button></p>*/}
    </div>
  )
}

export default Signout;