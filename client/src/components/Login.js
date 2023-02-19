import React , {useState} from 'react'
import { Link } from 'react-router-dom'


const Login = (props) => {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [loggerId , setLoggerId] = useState("")
   


// const getOneUser = (ID) => {
//   axios.get(`http://127.0.0.1:3000/api/users/${ID}`)
//   .then((result) => {
//     console.log(result);
//     setLogger(result)
//   })
//   .catch((error) => {console.log(error);})
// }


  return (
<div className="form">
  
  <div className="username">
    <input type="text" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}/>
  </div>
  
  <div className="password">
    <input type="text" placeholder="PassWord" onChange={(e) => {setPassword(e.target.value)}}/>
  </div>
  <div className="login">
    <Link to="/home" 
    onClick={() => props.users.filter((el) => {
       if(el.email === email && el.password === password) {
        props.logger(el)
        
        }
     })
    }
    ><span>Sign In</span></Link>
  </div>
</div>
  )
}



export default Login
