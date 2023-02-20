import React , {useState} from 'react'
import Posts from './posts.js'
import Profile from './Profile.js'
import Form from './form.js'
import GetUsers from './getUsers.js'
const Home = (props) => {
const [view,setView] = useState("all")
const [query , setQuery] = useState("")
const renderView = () => {
  if(view === 'all') {
    return <Posts data ={props.data} users={props.users} query = {query}/>
}
if(view === 'profile') {
  return <Profile logger={props.logger}/>
}
if(view === 'create') {
  return <Form/>
}
}
  return (
    <div>
        <nav >
          <div className='nav-left'>
            <h1 className="logo" >
            Blog <span>App</span></h1>
         <ul className="list">
            <li >
              <label onClick={() => setView('all')}>Home</label>
            </li>
            <li >
              <label onClick={() => setView("profile")}>Profile</label>
            </li>
            <li>
              <label onClick={() => setView('create')}>Create Blog</label>
            </li>
          </ul>
         </div>
         <div className='nav-right'>
           <div className='search-box'>
            <img src={props.logger.picture}/>
            <input type='text' placeholder='Search' onChange={(e) => setQuery(e.target.value)}/>
           </div>
         <div className='nav-user-icon online'>
         <img src="\img\profile.png" />
         </div>
         </div>
        </nav>
        <div className='container'>
          <div className='left-sidebar'>
          <GetUsers getUser={props.users}/>
          {console.log("this" , props.users)}
          </div>
        </div>
      {renderView()}
    </div>
  )
}
export default Home