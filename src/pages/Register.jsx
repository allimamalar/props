//import {Link} from "react-router-dom"
//import Register from "./Register"
import { useState } from "react"
import Input from "costuminputg"
const Register=()=>{
    const [username,setUsername]=useState("")
     const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handileSubmit=()=>{
          e.preventDefault()
          console.log(username)
          console.log(phone)
          console.log(email)
          console.log(password)
        setUsername("")
        setPhone("")
         setEmail("")
         setPassword("")
    }
return(
    <center>
    <div className="item-center justify w-150 h-full mt-50 bg-gray-100">
        <form onSumbit={handileSubmit}>
          <Input
        type='username'
        label='Username'
        placeholder='Enter your username'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br></br>
        <Input
        type='number'
        label='Phone'
        placeholder='Enter your phone number'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        /><br></br>
        
        <Input
        type='email'
        label='Email address'
        placeholder='Email address'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>
        <Input
        type='password'
        label='password'
        placeholder='Enter your password'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>
        <Input
        type='password'
        label='Confrim password'
        placeholder='re-enter password'
        className='w-[80%] h-10 border border-gray-300 rounded-md pa-4'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>
        <button className='bg-blue-600 w-full mt-4' type='submit'>Sign in</button>
        </form>
    </div>
    </center>
)
}
export default Register