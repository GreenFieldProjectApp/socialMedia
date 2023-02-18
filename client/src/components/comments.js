import React from 'react'

const Comments = (props) => {
 
     
  return (
    <div>
      {props.data.user.fullName}
      <br/>
      {props.data.content}<br/>
      likes:{props.data.likes}
      <p>{props.data.createdAt}</p>
    </div>
  )
}

export default Comments
