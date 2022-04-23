import { useContext, useState } from 'react'
import logo from './logo.svg'
import { ReactDOM } from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import './App.css'
import { About } from './components/about'
import {  Homepage } from './components/home'
import { Navbar } from './components/Navbar'
import {Products } from './components/Product'
import { Users } from './components/Users'
import { UserDetails } from './components/userdetails'
import { Login } from './components/login'
import { privateComponent } from './components/privatecomponent'




function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
   <Navbar/>
  
<Routes>
  
  <Route path='/' element={<Homepage/>} ></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/Product' element={<Products/>}></Route>
  <Route path='/Users' element={<Users/>}></Route>
  <Route path='/users/:id' element={
    <privateComponent><UserDetails/>
    </privateComponent>
  }></Route>

  <Route path='/login' element={<Login/>}></Route>
</Routes>
      
     </div>
  )
}

export default App
