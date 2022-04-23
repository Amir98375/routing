import { Link } from "react-router-dom"
export const Navbar =()=>{

    const nav =[
       {title:"Homepage", to :"/"},
       {title:"About",to :"/about"},
       {title:"Products",to :"/product"},
       {title:"Userslist",to :"/Users"},
       
    ]
  return (
      <div>
          
          {nav.map((e,i)=>
              <Link key={i}
             to={e.to} style={{margin:"30px"}}> 
               {e.title}</Link>
          )}
      </div>
  )
 
   
     
         
  
}