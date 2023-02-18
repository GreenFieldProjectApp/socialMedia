import React , {useState}from 'react'
import axios from 'axios'
import UpdateComments from './updateComments'
import UpdatePost from './UpdatePost'

const Posts = ({data,users}) => {
  console.log("this is the data",data);
  console.log("this is the users",users);

  const [updateCommentsform,setUpdateCommentsform]=useState(false);
  const updateCommentform=()=>{
   setUpdateCommentsform(!updateCommentsform)
   
  }

  const [updatePostform,setUpdatePostform]=useState(false);
  const updatepostsform=()=>{
    setUpdatePostform(!updatePostform)
   
  }




  

  const [content , setContent] = useState("")
  const addcomment = () => {
    axios.post("http://localhost:3000/api/comments/add" , {content:content})
    ;window.location.reload()
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }


  return (
    <div >
      {data.map((item , index) => (
        <div className="post" key = {index}>
       

       


       <p className='comment-timestamp'>{item.createdAt}</p> <br/>
       <h3 className="post-tilte">{item.title}</h3> <br/>
       <p className='post-content'>{item.content}</p> <br/>
       <button className='like-button'> {item.likes}</button> <br/>

       <button className='delete-button' onClick={() =>
       axios.delete(`http://localhost:3000/api/posts/deleteOnePost/${item.id}`)
       (window.location.reload())
       .then(function (result){console.log("result",result)}) 
       .catch(function(error){console.log(error);})
      }>delete post</button> 

        <input 
        className='update-button'
        type="submit"
        value="update"
        onClick={()=>updatepostsform()  
        }
        /> 
{updatePostform && (< UpdatePost id={item.id} content={item.content}/>)} <br/>





       <input  className='comment-input' placeholder='add comment' onChange={(e) => {setContent(e.target.value)} }/>
       <button className='comment-button' onClick={() => {addcomment()}}>Add comment</button> <br/> 
       <div>
      
  { 
item.comments &&
  item.comments.map((el , index) => (
    
            <div className="comment-container" key = {index}>
              
              {console.log("elem",el.id)}
              <h3 className='comment-author'>{el.user.fullName}</h3>
              <p className='comment-timestamp'>{el.createdAt}</p><br/>
              <p className='comment-content'>{el.content}</p> <br/>
              <button className='like-button'> {el.likes}</button>
            
    
              <button className='reply-button' onClick={()=>axios.delete(`http://localhost:3000/api/comments/deleteComment/${el.id}`)
                (window.location.reload())
               .then(function (result){console.log("result",result)}) 
               .catch(function(error){console.log(error)
                })
            }>delete that comment</button> <br/>

            <input
        className='update-button'
        type="submit"
        value="update"
        onClick={()=>updateCommentform()  
        }
        />
              {updateCommentsform && (< UpdateComments id={el.id } content={el.content}/>)}


        </div>
        ))}
        
      </div>
      
      </div>    
      ))}
     
    </div>
  )
}

export default Posts
