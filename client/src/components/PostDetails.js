import React from 'react'
import Comments from './comments'


const PostDetails = (props) => {



  return (
    <div>
        <div>
        <h2>{props.data.user.fullName}</h2><br/>
           <h1>{props.data.title}</h1><br/>
           <p>{props.data.content}</p>
            <p><img style={{width:500, height:300}} src={props.data.image}/></p> 
            likes:{props.data.likes}
           <p>{props.data.createdAt}</p>
           </div>
           
           <div>
           {props.data.comments && props.data.comments.map((e , index) => (
            <div key={index}>
            <Comments data={e}/>
            </div>
           ))}
           </div>
     </div>
  )
}

export default PostDetails
