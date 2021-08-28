import React, { useRef } from 'react'
import { auth } from '../firebase/config';
import './Signin.css'
import Swal from 'sweetalert2';
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
           // alert('user added') ;
            Swal.fire(
                'User added',
                'You clicked the button!',
                'success'
              )

        }).catch(err => {
            if  ((passwordRef.current.value.length)<6 ){
               // alert('Password should be more than six caractere') ;
               Swal.fire(
                'Password incorrect',
                'should be more than six caractere!',
                'error'
              )
            }else //alert('User incorrect, Choose another user') ;
            Swal.fire(
                'User incorrect',
                'Choose another user',
                'warning'
              )
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
           Swal.fire(
            'Welcome InstaLoad',
            'You clicked the button!',
            'success'
          ).then((result) => {
              if (result.value){ 
                 
                window.location.replace('http://localhost:3000/Home') ;
              }
          })
           // window.location.replace('http://localhost:3000/Home') ;
            //<Redirect to="/Home"/> ;
           // history.pushState("/Home") ;
        }).catch(err => {
            //alert('User doesn t exists choose another user') ;
            Swal.fire(
                "User doesn't exists !",
                'choose another user ',
                'error'
            )
        })
    }
    return (
        <div className="signin">
            <form action="">
                <h1 class="sign">Sign in</h1>
                <input ref={emailRef} type="email" placeholder="User"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                
                <button onClick={signIn}>Sign in </button> 
                <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
            </form>
        </div>
    )
}

export default Signin;