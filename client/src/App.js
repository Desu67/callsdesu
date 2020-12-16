import React, { useState, useEffect } from 'react'
import fire from './firebase'

//Pages
import Login from './Components/LoginPage/Login'
import Call from './Components/Call/Call'

import  'rodal/lib/rodal.css'

function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setAccount] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const hanleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        // eslint-disable-next-line
        switch(err.code){
          case "auth/invalid-email":
            break;
          case "auth/user-disabled":
            break;
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const hanleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        // eslint-disable-next-line
        switch(err.code){
          case "auth/email-already-in-use":
            break;
          case "auth/invalid-email":
            setEmailError(err.message)
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const hanleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }

  useEffect(() => {
    authListener();
  });

  return (
    <>
    {user ? (
      <Call hanleLogout={hanleLogout}/>
    ) : (
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={hanleLogin}
        hanleSignup={hanleSignup}
        hasAccount={hasAccount}
        setAccount={setAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    )}
    </>
  )
}

export default App;