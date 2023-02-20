import React,{useState} from 'react'
import axios from 'axios'
const UpdatePosts = (props) => {
    const [content,setContent]=useState(props.content)
    const handlesubmit=()=>{
   axios.put(`http://localhost:3000/api/posts/updateOnePost/${props.id}`,{content:content})
   window.location.reload()
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
   }
  return (
    <div>
    <textarea value={content} placeholder='update post' className='comment-input' onChange={(e) => {setContent(e.target.value)} }/><br/>
    <button className='update-button' onClick={() => {handlesubmit()}}>update this post</button> <br/>
    </div>
  )
}
export default UpdatePosts