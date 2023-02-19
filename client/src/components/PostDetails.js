import React,{useState}from 'react'
import Comments from './comments'
import UpdatePosts from './UpdatePosts'
import axios from 'axios'

const PostDetails = (props) => {
     
     const [updatePost,setUpdatePost]=useState(false);
     const [showcomments,setshowcomments]=useState(false);

     const [content , setContent] = useState("")

     const addcomment = () => {
       axios.post("http://localhost:3000/api/comments/add" , {content:content})
       .then(result => console.log(result))
       .catch(error => console.log(error));
     }
     const showcomment=()=>{
      setshowcomments(!showcomments)
      
    }

     const updateposts=()=>{
      setUpdatePost(!updatePost)
      
    }
     const handledelete=()=>{
       axios.delete(`http://localhost:3000/api/posts/deleteOnePost/${props.data.id}`)
        window.location.reload()
       .then(function (result){console.log("result",result)}) 
       .catch(function(error){console.log(error);})
      }
      
  return (
    <div>

        <div className="post">
        <p className='comment-timestamp'>{props.data.createdAt}</p>
        <h2>{props.data.user.fullName}</h2><br/>
        <h1 className="post-tilte">{props.data.title}</h1><br/>
        <p className='post-content'>{props.data.content}</p>
        <button className='delete-button' onClick={() => handledelete()}>delete post</button>
        <input className='update-button' type="submit" value="update" onClick={()=>updateposts()}/> <br/>
        <button className='like-button'>{props.data.likes}</button>

            <input className='update-button' type="submit" value="show comments" onClick={()=>showcomment()}/> 

            {updatePost && (< UpdatePosts id={props.data.id} content={props.data.content}/>)} <br/> 
           
          <div>
           <input  className='comment-input' placeholder='add comment' onChange={(e) => {setContent(e.target.value)}}/>
           <button className='comment-button' onClick={() => {addcomment()}}>Add comment</button> <br/>
           </div> 
           </div>
           <div>
           {props.data.comments && props.data.comments.map((e , index) => (
            <div key={index}>
           {showcomments && <Comments data={e}/>} 
            </div>
           ))}
           
           </div>
     </div>
  )
}

export default PostDetails
