import React ,{useState}from 'react'
import axios from 'axios';
import UpdateComments from "./UpdateComments";
const Comments = (props) => {
  console.log(props);
  const [updateComments,setUpdateComments]=useState(false);
  const updateComment=()=>{
    setUpdateComments(!updateComments)
  }
  const handledelete=()=>{
    axios.delete(`http://localhost:3000/api/comments/deleteComment/${props.data.id}`)
    {console.log("props.data.id",props.data);}
     window.location.reload()
    .then(function (result){console.log("result",result)})
    .catch(function(error){console.log(error);})
   }
  return (
    <div  className="comment-container" >
      <h3 className='comment-author'>{props.data.user.fullName}</h3>
      <br/>
      <p className='comment-content'>{props.data.content}</p><br/>
      <button className='like-button'>{props.data.likes}</button>
      <p className='comment-timestamp'>{props.data.createdAt}</p>
      <button className='delete-button' onClick={() => handledelete()}>delete comment</button>
      <input
        className='update-button'
        type="submit"
        value="update"
        onClick={()=>updateComment()  }
        />
      {updateComments && (< UpdateComments id={props.data.id } content={props.data.content}/>)}
    </div>
  )
}
export default Comments









