import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'

export const privateComponent=({children})=>{
    const {isAuth} = useContext(AuthContext)
    if(!isAuth){
         <Navigate to={"/login"}></Navigate>
    }
    return children; 
  }
 