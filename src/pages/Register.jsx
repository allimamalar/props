//import {Link} from "react-router-dom"
import React from 'react'
import{Link, useNavigate} from'react-router-dom'

//import Login from ./Login
const Register = () => {
  const navigate=useNavigate()
  const handileClick=()=>{
    console.log("Handle click function called")
    navigate("/Login")
  }
  return (
    <div><h1>my regsiter page</h1>
    {/*<Link to ="/Login">LOGIN</Link>*/}
    <button onClick={handileClick}>login</button>
   </div> 
  )
}
export default Register

