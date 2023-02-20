import React , {useState} from 'react'
import Posts from './posts.js'
import Profile from './Profile.js'
import Form from './form.js'





const Home = (props) => {

const [view,setView] = useState("all")
const data=props.logger.data
console.log("ahaya",data)
// console.log("ahaya 2",data.userWithEmail)

const renderView = () => {
  if(view === 'all') {
    return <Posts data ={props.data} users={props.users}/>
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
        <nav className="nav">
          <h1 className="logo" >
            Blog <span>App</span>
          </h1>
          
       
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
         
        </nav>
    
      {renderView()}
    </div>
    
  )
}


export default Home
