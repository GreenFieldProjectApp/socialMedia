import React from 'react'
import PostDetails from './PostDetails';

const Posts = (props) => {
  return (
    <div className='postsFeed'>
      
      {props.data && props.data.map((item , index) => (
        <div className="post" key = {index}>
             
       <PostDetails data={item} users={props.users}/>
 </div>    
      ))}
    </div>
  )
}

export default Posts
