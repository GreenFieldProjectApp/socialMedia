import React from 'react'
import { useState } from "react";
import axios from 'axios'
//import PostDetails from './PostDetails';
import Posts from './posts';


const Profile = (props) => {
  console.log("props for Profile: ", props);
  const[fullName,setFullName]= useState("");
  const[email,setEmail]= useState("");
  const[picture,setPicture]= useState("");
  const[phoneNumber,setPhoneNumber]= useState(0);
  const[password,setPassword]= useState(0);

  const cloud_name = "dwkdymju4";
  const upload_preset ="blog test image 00";

  const handleClick=async()=>{
    const {files} =document.querySelector(".app_uploadInput");
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", upload_preset);
    const options={
      method:"POST",
      body: formData,
    };
   fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    options 
    )
    .then((res)=> res.json())
    .then((res)=> setPicture(res.secure_url))
    .catch((err)=>console.log(err));
    alert("Image uploaded !");
  }

  const updateUser=()=>{
    //axios.get
    axios.put('http://localhost:3000/api/updateUser/:id', {
      fullName: fullName,
      email: email,
      picture: picture,
      phoneNumber:phoneNumber,
      password:password,

    })
    //window.location.reload()
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    alert("Your informations are updated successfully !");
  }

  const showUserProfile=()=>{

  }
    
  return (
    <div className="app">
      <div className='feedBox'>
      <Posts data ={props.data} userId={props}/>
      </div>
      <div className='profileBox'>
      <div className='input'>
        <textarea placeholder="Full Name" className='input-field' onChange={(e) => {setFullName(e.target.value)}}/>
      </div>
      <div className='input'>
        <textarea placeholder='Email' className='input-field' onChange={(e) => {setEmail(e.target.value)} }/>
      </div>
      <div className='input'>
        <textarea placeholder='Phone Number' className='input-field' onChange={(e) => {setPhoneNumber(e.target.value)} }/>
      </div>
      <div className='input'>
        <textarea placeholder='Password' className='input-field' onChange={(e) => {setPassword(e.target.value)} }/>
      </div>
      <div className="app">
        <input type="file" /*lang="eng"*/ className="app_uploadInput"/>
        <img style={{width:500, height:300}} src={picture} className="app_uploadInput"/>
        <button onClick={handleClick}>Upload Your Image</button>
      </div>
      <button type="submit" onClick={updateUser}>Update Your Informations</button>
      </div>
    </div>
    

  )
}

export default Profile
