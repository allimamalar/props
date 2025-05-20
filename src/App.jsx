//import { useState } from "react" 
//import { Sample } from "./component/Sample";
import{BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Register from "./pages/register"
import PageNotFound from "./pages/pageNotFound"


function App() {
  //const[name,setName]=useState("")
  //console.log(name);
  
  //const myName="malarandiiii"
  //const myAge=20
  //const myNative="iluppur"
  //const[count,setCount]=useState(0)
  return (
    <>

    {/*<h1>My React App</h1>
    <h1 className="text-30xl font-bold underline text-blue-600"> HELLO WORLD </h1>
   {/*} <Sample myName={myName} myAge={myAge} myNative={myNative}/>
    {/*<button className="bg-amber-400 p-2"onClick={()=>setCount(count+1)}>click karo {count}</button>
    <Sample count={count}/>*/}
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Dashboard/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>
      <Route path="*"  element={ <PageNotFound /> } />
      

      </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
