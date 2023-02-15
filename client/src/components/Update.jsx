import React from 'react'

const Update = (props) => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [maj,setMaj]=useState(false)

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

export default Update



const update =(id,body)=>{
    axios.put(`/${id}`,body)
    .then(result=>console.log(result),
    setMaj(!maj))
    .catch(err=>console.log(err))
  }