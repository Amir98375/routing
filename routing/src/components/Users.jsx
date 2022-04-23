import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
<link rel="stylesheet" href="./users.css" />
export const Users=()=>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
       axios.get('https://reqres.in/api/users').then(({data})=>{
        setUsers(data.data)
       })
    },[]);
    return(
      < >
         { users.map((user)=>(
          
               
            <div 
              >
              <img  src={user.avatar} alt="" />
               <p key={user.id}>
               <Link to={`/users/${user.id}`}>
               {user.id}.{user.first_name}
               </Link>
               </p>

            </div>  
            
           
        
         ))
        }
      </> 
    )
}