import React, { useState , useEffect } from "react";
import {BrowserRouter, Routes,Route  } from 'react-router-dom'
import axios from "axios";
import Register from './components/register.js'
import FirstLook from "./components/firstLook";
import Home from "./components/Home.js";
import Login from "./components/Login.js";




const App = () => {

  const [data , setData] = useState([])


useEffect(() => {
  getPosts() 
} , [])

useEffect(() => {
  getUsers() 
} , [])

const getPosts = () => {
  axios.get("http://127.0.0.1:3000/api/posts/getAllPosts")
  .then(response => {setData(response.data)})
  .catch(error => {console.log(error)})
} , [])



  return (

  <BrowserRouter>
  
  <div className="App">
    
       
          <ul className="list">
            <li >
              <a href="/">Home</a>
            </li>
            <li >
              <a href="/seif">Profile</a>
            </li>
            <li>
              <a href="/hsm">Create Blog</a>
            </li>
            <li>
              <a href="/alaa">About Us</a>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path='/hsm' element ={<Form/>}/>
          <Route path='/' element ={<Posts data = {data}/>}/>
         
          
        </Routes>
        </div>
    
    </BrowserRouter>
    
    );
}

export default App;
