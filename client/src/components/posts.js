import React , {useState}from 'react'
import axios from 'axios'

const Posts = ({data}) => {

  const [content , setContent] = useState("")
  
  const addcomment = () => {
    axios.post("http://localhost:3000/api/comments/add" , {content:content})
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }
  
  if(data[0])
  console.log("props",data[0].comments[0].content);
  return (
    <div >
      {data.map((item , index) => (
        <div className="post" key = {index}>

      {item.createdAt} <br/>
       {item.title} <br/>
       {item.content} <br/>
       likes : {item.likes} <br/>
     
       <div>
  {item.comments.map((el , index) => (
    
            <div className="postt" key = {index}>
              <input placeholder='add comment' className='input-field' onChange={(e) => {setContent(e.target.value)} }/>
       <button onClick={() => {addcomment()}}>Add comment</button> <br/> 
              {console.log(el)}
              {el.user.fullName}
              {el.createdAt}<br/>
              comments : {el.content}<br/>
              likes:{el.likes}

        </div>
        ))}
        </div>

      </div>    
      ))}
     
    </div>
  )
}

export default Posts
