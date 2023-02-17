import React from 'react'

const Posts = (props) => {
  console.log("props",props);
  return (
    <div >
      {props.data.map((item , index) => (
        <div className="post" key = {index}>
            
       {item.title} <br/>
       {item.content} 
      
       
      </div>    
      ))}
    </div>
  )
}

export default Posts
