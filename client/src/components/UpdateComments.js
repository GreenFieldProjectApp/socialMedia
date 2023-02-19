import React , {useState} from 'react'
import axios from 'axios'

const UpdateComments = (props) => {
    const [content,setContent]=useState(props.content)
   
    const handlesubmit=()=>{
   axios.put(`http://localhost:3000/api/comments/updateComment/${props.id}`,{content:content})
   window.location.reload()
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
   }

  return (
    <div>
      <input value={content} placeholder='update comment' className='comment-input' onChange={(e) => {setContent(e.target.value)} }/>
       <button className="comment-button" onClick={() => {handlesubmit()}}>update that comment</button> <br/> 
       <div></div>
    </div>
  )
}

export default UpdateComments
