import React from 'react'

const BlogItem = () => {
  return (
    <div>
        <h1>{props.items.title}</h1>
        <p>{props.items.content}</p>
        
      
    </div>
  )
}

export default BlogItem
