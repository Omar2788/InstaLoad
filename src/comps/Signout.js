import React from 'react';
import './Signout.css'
//import { Link  } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signout = () => {
  return (
    <div className="signout">
      <button  class="but" onClick={() => 
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
    
    </div>
  )
}

export default Signout;