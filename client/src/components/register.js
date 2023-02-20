import React , {useState} from 'react'
import { Link ,Navigate,useNavigate} from 'react-router-dom'
import axios from 'axios'



const Register = (props) => {

  const [fullName , setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
   
const navigate=useNavigate()

const User = () => {
  const obj = {fullName : fullName , email: email , phoneNumber:phoneNumber , password:password}
  axios.post("http://127.0.0.1:3000/api/auth/signup" , obj)
  .then((result) => {
    console.log(result);
    navigate("/login")
  })
  .catch((error) => {console.log(error);})
}


  return (
<div className="form">
  <div className="username">
    <input type="text" placeholder="Full Name" onChange={(e) => {setFullName(e.target.value)}}/>
  </div>
  <div className="username">
    <input type="email" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}/>
  </div>
  <div className="username">
    <input type="text" placeholder="Phone Number" onChange={(e) => {setPhoneNumber(e.target.value)}}/>
  </div>
  <div className="password">
    <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
  </div>
  <div className="login">
  <span onClick={() => {User()}}>Register</span>
  </div>
</div>
  )
}



export default Register
