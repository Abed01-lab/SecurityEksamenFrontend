import React, { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button'
import facade from "./ApiFacade";

import './Doc.css'
 
function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
    <div className="security">
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <Button onClick={performLogin}>Login</Button>
      </form>
    </div>
  )
 
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => { 
    facade.fetchData().then(data => setDataFromServer(data.msg));
  }, [])
 
  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )
 
}
 
function Security() {

  const logout = () => { 
    facade.logout();
    document.location.reload()
  } 
  const login = (user, pass) => {
    facade.login(user,pass).finally(() => {document.location.reload()})
    

  }

  return (
    <div className="security">
      {!facade.loggedIn() ? (<LogIn login={login} />) :
        (<div className="security">
          <LoggedIn />
          <Button onClick={logout}>Logout</Button>
        </div>)}
    </div>
  )
 
}

export default Security;
