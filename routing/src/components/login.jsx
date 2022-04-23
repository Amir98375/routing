import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const Login =()=>{
    
    const {handleAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    return <div>
        <h2>Login</h2>
        <input type="text" placeholder="type user id" /><br></br>
        <input type="text"placeholder="enter the password here" /><br></br>
        <button onClick={()=>{
            //make network request POST  login on req.login.api with username and password
            //get token
            //change state to true
            handleAuth(true) 
            
           navigate(-2, {replace:false} )
            //imperative way to define or navigate 
            

        }}
        >Submit</button>
        
    </div>
}