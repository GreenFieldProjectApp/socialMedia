import React,{useState} from 'react'

const AddBlog = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [maj,setMaj]=useState(false)

    const add = ()=>{
        let obj={
            title:title,
            content:content
        }
        axios.post("/",obj)
        .then(result=>console.log(result),setMaj(!maj)
        .catch(err=>console.log(err)))
    }

  return (
    <div>
        <form >
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="text" onChange={(e)=>{setContent(e.target.value)}}/>
      <button onClick={()=>{add}}>submit</button>
      </form>
    </div>
  )
}

export default AddBlog
