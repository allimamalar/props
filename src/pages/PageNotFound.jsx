//import image from"../assets/image.png"
//import{Link, useNavigate}from"react-router-dom"
import login from"./login"

const PageNotFound=()=>{
    
    
      
    return(
        <div>
            {/*<button onClick={handileClick}>login</button>*/}
             <img className="w-full" src={image} alt="404" />
            <Link to ="/Login">LOGIN</Link>
        </div>
    )
}
export default PageNotFound