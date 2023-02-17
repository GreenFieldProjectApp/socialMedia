import React, { useState , useEffect } from "react";
// import Form from "./components/form";
import {BrowserRouter, Routes,Route  } from 'react-router-dom'
import axios from "axios";
import Posts from './components/posts.js'
import Register from './components/register.js'
import FirstLook from "./components/firstLook";
import Navbar from "./components/navbar";
import Form from './components/form.js'



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
    
       
        
        <Routes>
          
          <Route path='/posts' element ={<Posts data = {data} />} />
          <Route path="/" element={<FirstLook/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/form" element={<Form/>}/>
          
          
          
        </Routes>
        </div>
    
    </BrowserRouter>

    );
}

export default App;
