import React from 'react'
import { useState } from "react";
import axios from 'axios'
//import PostDetails from './PostDetails';
import Posts from './posts';
const Profile = (props) => {
  console.log("props for Profile: ", props);
  const[fullName,setFullName]= useState("");
  const[email,setEmail]= useState("");
  const[picture,setPicture]= useState("https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg");
  const[phoneNumber,setPhoneNumber]= useState(0);
  const[password,setPassword]= useState(0);
  // const[userId,setUserId]=useState(0);
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
    axios.put(`http://localhost:3000/api/users/updateUser/${1}`, {
      fullName: fullName,
      email: email,
      picture: picture,
      phoneNumber:phoneNumber,
      password:password,
      // userId: 1
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
  
  
  return (
    <div className="app">
      <div className='feedBox'>
      <Posts data ={props.data} userId={props}/>
      </div>
      <div className='profileBox'>
      <div className='input'>
        <input placeholder="Full Name" className='comment-inputt' onChange={(e) => {setFullName(e.target.value)}}/>
      </div>
      <div className='input'>
        <input placeholder='Email' className='comment-inputt' onChange={(e) => {setEmail(e.target.value)} }/>
      </div>
      <div className='input'>
        <input placeholder='Phone Number' className='comment-inputt' onChange={(e) => {setPhoneNumber(e.target.value)} }/>
      </div>
      <div className='input'>
        <input placeholder='Password' className='comment-inputt' onChange={(e) => {setPassword(e.target.value)} }/>
      </div>
      {/* <div className='input'>
        <textarea placeholder='userId' className='input-field' onChange={(e) => {setUserId(e.target.value)} }/>
      </div> */}
      <div className="app">
        <input type="file" /*lang="eng"*/ className="app_uploadInput" id="bb"/>
        <img style={{width:500, height:300}} src={picture} className="app_uploadInput" id="img"/>
        <button onClick={handleClick} className="delete-button">Upload Your Image</button>
      </div>
      <button type="submit" onClick={updateUser} className="delete-button">Update Your Informations</button>
      </div>
    </div>
  )
}
export default Profile