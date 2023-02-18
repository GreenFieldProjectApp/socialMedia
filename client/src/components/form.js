import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const[title,setTitle]= useState("");
  const[content,setContent]= useState("");
  const[userId,setUserId]=useState(0);
  //const[fullName,setFullName]= useState("");
  //const[email,setEmail]= useState("");
  const[ imageUrl, setImageUrl] = useState("");
  const[likes,setLikes]=useState(0);
  //const[phoneNumber,setPhoneNumber]= useState();
  //const[password,setPassword]= useState();

  //const[image, setImage] =useState("");
  const cloud_name = "dwkdymju4";
  const upload_preset ="blog test image 00";

    const addBlog=()=>{
      //axios.get
      axios.post('http://localhost:3000/api/posts/addOnePost', {
        title: title,
        content: content,
        image: imageUrl,
        userId:1,
        likes:0,
  
      })
      //window.location.reload()
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
    }

  
  return(
    <div className="app">
      <div>
      <div className='input'>
      <input placeholder='Title' className='input-field' onChange={(e) => {setTitle(e.target.value)} }/>
       </div>
       <div className='input'>
       <textarea placeholder='Content ...' className='input-field' onChange={(e) => {setContent(e.target.value)} }/>
       </div>
       <div className='input'>
       <textarea placeholder='User ID' className='input-field' onChange={(e) => {setUserId(e.target.value)} }/>
       </div>
<input type="file" className="app_uploadInput"/>
<img style={{width:700, height:500}} src={imageUrl} className="app_uploadInput"/>
<button onClick={handleClick}>
    upload
</button>
<button type="submit" onClick={addBlog}>Submit</button>
{/* <div type="file" className="app_downloadImg">
<img src={imageUrl} className="app_downloadImg"/>
  
</div> */}
</div>
    </div>
  )
}

export default Form;