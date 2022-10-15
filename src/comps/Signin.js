import React, { useRef } from 'react'
import { auth } from '../firebase/config';
import './Signin.css'
import Swal from 'sweetalert2';
import usr from "../images/user.png";
import { useHistory } from "react-router-dom";
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory()

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            //history.push("/")
        ).then(cred => {
            console.log(cred);
        }).then(user => {
           // alert('user added') ;
            Swal.fire(
                'User added',
                'You clicked the button!',
                'success'
              )

        }).catch(err => {
            if  ((passwordRef.current.value.length)<8 ){
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
                    
                history.push("/Home")
              }
          })
           // window.location.replace('http://localhost:3000/Home') ;
            //<Redirect to="/Home"/> ;
           // history.pushState("/Home") ;
        }).catch(err => {
            //alert('User doesn t exists choose another user') ;
            Swal.fire(
                "User doesn't exist !",
                'choose another user ',
                'error'
            )
        })
    }
    return (
        <div className="signin">
            <div className='l'>
            <div className="leftside">
                <h2 className='l-intro'>Welcome to</h2>
                <h1 className='l-name'>InstaLoad</h1>
                <p className="i-desc">
                    You have a lot of photos ? You didn't have a place to keep your memories safe ?
                    You have a difficulty to manage your photos ? InstaLoad help you to save & keep your memories protected. 
                </p>
            </div>
            </div>
            <div className='r'>
                <div className='bs'>
                    <form className="bSignIn" action="">
                        <h1 class="sign">Sign in</h1>
                        <img className='imageUser' src={usr} alt=''></img>
                        <input className="login" ref={emailRef} type="email" placeholder="Login"/>
                        <input className="motdepasse" ref={passwordRef} type="password" placeholder="Password"/>
                        <button className="buttonSignIn" onClick={signIn}>Sign in </button>
                        <h6 className='remarque'>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Signin;