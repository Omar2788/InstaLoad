import React, { useRef } from 'react'
import { auth } from '../firebase/config';
import './Signin.css'
import { Link } from 'react-router-dom';
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            alert('user added') ;

        }).catch(err => {
            if  ((passwordRef.current.value.length)<6 ){
                alert('Password should be more than six caractere') ;
            }else alert('User incorrect, Choose another user') ;
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            alert('Welcome InstaLoad ') ;
            window.location.replace('http://localhost:3000/Home')

        }).catch(err => {
            alert('User doesn t exists choose another user') ;
            
        })
    }
    return (
        <div className="signin">
            <form action="">
                <h1 class="sign">Sign in</h1>
                <input ref={emailRef} type="email" placeholder="User"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button onClick={signIn}>Sign in </button>
                <Link to="/"></Link> 
                <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
            </form>
        </div>
    )
}

export default Signin;