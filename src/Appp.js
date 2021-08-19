import { useEffect, useState } from 'react';
import './App.css';
import UploadForm from './comps/UploadForm';
import Signin from './components/Signin';
import { auth } from './firebase';
import Title from './components/Title';
function Appp() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="Appp">
      <Title/>
      {user ? <UploadForm /> : <Signin />}

    </div>
  );
}

export default Appp;