import React from "react";
import { useState } from "react";
import axios from "axios";
const Form = (props) => {
  console.log("props: ",props);
  const[title,setTitle]= useState("");
  const[content,setContent]= useState("");
  const[userId,setUserId]=useState(2);
  const[ imageUrl, setImageUrl] = useState("https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg");
  const[likes,setLikes]=useState(0);
  const cloud_name = "dwkdymju4";
  const upload_preset ="blog test image 00";
    const addBlog=()=>{
      axios.post('http://localhost:3000/api/posts/addOnePost', {
        title: title,
        content: content,
        image: imageUrl,
        userId:1,
        likes:0,
      })
      window.location.reload()
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      alert("Post Created!");
    }
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
      .then((res)=> setImageUrl(res.secure_url))
      .catch((err)=>console.log(err))
      alert("Image uploaded!");
    }
  return(
  <div >
    <div className="app">
      <input type="file"  className="app_uploadInput" id="upload"/>
      <img style={{width:500, height:300 } }src={imageUrl}  className="app_uploadInput" id="img"/>
      <button onClick={handleClick} id="upload">Upload Your Image</button>
    </div>
      <div>
      <div className='input'>
      <input placeholder="Title" className='comment-inputt' onChange={(e) => {setTitle(e.target.value)} }/>
       </div>
       <div className='input'>
       <textarea placeholder="Content ..." className='comment-inputt' onChange={(e) => {setContent(e.target.value)} }/>
       </div>
       {/* <div className='input'>
       <input placeholder='User ID'  onChange={(e) => {setUserId(e.target.value)} } className="comment-inputt"/>
       </div> */}
      <button type="submit" className="delete-button" onClick={addBlog}>Submit</button>
  </div>
</div>
  )
}
export default Form;