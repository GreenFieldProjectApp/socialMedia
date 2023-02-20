import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [loggerId , setLoggerId] = useState("")
   
const body ={
  email:email,
  password:password
}

const getOneUser = () => {
  axios.post(`http://127.0.0.1:3000/api/auth/signin`,body)
  .then((result) => {
    console.log(result);
    
    props.logger(result)

  })
  .catch((error) => {console.log(error);})
}


  return (
<div className="form">
  
  <div className="username">
    <input type="email" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}/>
  </div>
  
  <div className="password">
    <input type="password" placeholder="PassWord" onChange={(e) => {setPassword(e.target.value)}}/>
  </div>
  <div className="login">
    <Link to="/home" onClick={()=>{
      getOneUser()
    }}
    
    ><span>Sign In</span></Link>
  </div>
</div>
  )
}



export default Login
