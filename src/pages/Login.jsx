import {Link} from "react-router-dom"
//import Register from "./Register"
import { useState } from "react"
import Input from "costuminputg"
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handileSubmit=()=>{
          e.preventDefault()
          console.log(email)
          console.log(password)
         setEmail("")
         setPassword("")
    }
return(
    <center>
    <div className="item-center justify w-150 h-full mt-50 bg-gray-100">
        <form onSumbit={handileSubmit}>
        <Input
        type='email'
        label='Email address'
        placeholder='Email address'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
        type='password'
        label='password'
        placeholder='Enter your password'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className='bg-blue-600 w-full mt-4' type='submit'>Login</button>
        
        <h3>Don't have an account</h3>
        <Link to="/Register" style={{color:"blue",fontsize:"18px",textDecoration: "none"}}>Register</Link>
        </form>
    </div>
    </center>
)
}
export default Login