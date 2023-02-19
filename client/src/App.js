import React, { useState , useEffect } from "react";
import {BrowserRouter, Routes,Route  } from 'react-router-dom'
import axios from "axios";
import Register from './components/register.js'
import FirstLook from "./components/firstLook";
import Home from "./components/Home.js";
import Login from "./components/Login.js";




const App = () => {

const [data , setData] = useState([])
const [users , setUsers] = useState([])
const [view , setView] = useState("all")
const [logger , setLogger] = useState([])


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
}

const getUsers = () => {
  axios.get("http://127.0.0.1:3000/api/users/getAllUsers")
  .then(response => {setUsers(response.data)})
  .catch(error => {console.log(error)})
}



  return (

  <BrowserRouter>
  <div className="App">
        <Routes>
          <Route path="/home"
           element={<Home
           data={data} 
           logger={logger} 
           view={setView}
           users={users}
           />
          }
           />
          <Route path="/" element={<FirstLook/>}/>
          <Route path="/register" element={<Register  />}/>
          <Route path="/login" element = {<Login users={users} logger={setLogger} view={setView}/>}/>
        </Routes>
        </div>
    </BrowserRouter>

    );
}

export default App;
