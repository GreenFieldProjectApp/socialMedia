import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
// import List from './components/List.jsx'

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.get('/api/items')
    .then(result=>setItems(result))
    .then(err=>console.log(err))
   
  }, [])
  

  return (
    <div>
      <h1>Item List</h1>
      <List items={items} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))