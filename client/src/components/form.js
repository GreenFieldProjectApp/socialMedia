import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {

const [title ,setTitle] = useState("")
const [content , setContent] = useState("")

const addBlog = () => {
  axios.post("http://localhost:3000/api/posts/addOnePost" , {title:title , content:content})
  .then(result => console.log(result))
  .catch(error => console.log(error));
}


  return (
    <div className="card">
    <div className='card-image'>
      <div className='input'>
      <input placeholder='Title' className='input-field' onChange={(e) => {setTitle(e.target.value)} }/>
      </div>
      <div className='input'>
      <textarea placeholder='Content ...' className='input-field' onChange={(e) => {setContent(e.target.value)} }/>
      </div>
      <button onClick={() => {addBlog()}}>Add Blog</button>
    </div>
    </div>
  )
}

export default Form;
