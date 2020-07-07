import React from "react";
import Login from "./Login"

var isLoggedIn = true;

const currentTime = new Date().getHours();

console.log(currentTime);


function App() {
  return
    <div className="container">{
      isLoggedIn === true ? <h1>Hello</h1> : <Login/>


      
      }</div>;
}

export default App;
