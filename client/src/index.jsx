import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const [upd, setupd] = useState(false)
  const [items, setItems] = useState([])
  const [maj,setMaj]=useState(false)
  const [search,setSearch]=useState("")
  useEffect(() => {
    axios.get('/')
    .then(result=>setItems(result))
    .then(err=>console.log(err))
   
  }, [])
  

   const deletee =(id)=>{
    axios.delete(`/${id}`)
    .then(result=>console.log(result),
    setMaj(!maj))
    .catch(err=>console.log(err))
  }
   

  return (
    <div>
      <nav>
        <ul>
          <li>home</li>
          <li>form</li>
          <li>about us</li>
        </ul>
        <input type="text" placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}/>
      </nav>
      <h1>Blogs</h1>
      <Blogs search={search} items={items} />
      {upd&&<Update/>}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))