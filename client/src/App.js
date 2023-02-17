import React, { useState , useEffect } from "react";
import Form from "./components/form";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import axios from "axios";
import Posts from './components/posts.js'


const App = () => {

const [data , setData] = useState([])




useEffect(() => {
  getPosts()
} , [])

const getPosts = () => {
  axios.get("http://127.0.0.1:3000/api/posts/getAllPosts")
  .then(response => {setData(response.data)})
  .catch(error => {console.log(error)})
}


  return (
  <BrowserRouter>
  <div className="App">
    
       <nav className="nav">
          <h1 className="logo" >
            Blog <span>App</span>
          </h1>
          
       
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
