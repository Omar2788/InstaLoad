import React from 'react';
import './Signout.css'
//import { Link  } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory()

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
                //window.location.replace('http://localhost:3000/') ;
                history.push("/")
              }
          })}>Sign Out
      
          
    </button> 
    
    </div>
  )
}

export default Signout;