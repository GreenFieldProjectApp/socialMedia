import React from 'react'
import PostDetails from './PostDetails';
const Posts = (props) => {
console.log(":rocket: ~ file: posts.js:5 ~ Posts ~ props", props)
  return (
    <div className='postsFeed'>
      {props.data && props.data
      // .filter((e) => {e.title.toLowerCase().includes(props.query)})
      .map((item , index) => (
        <div className="post" key = {index}>
       <PostDetails data={item} users={props.users}/>
 </div>
      ))}
    </div>
  )
}
export default Posts