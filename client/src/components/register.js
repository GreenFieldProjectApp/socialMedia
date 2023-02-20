import React , {useState} from 'react'
import { Link ,Navigate,useNavigate} from 'react-router-dom'
import axios from 'axios'



const Register = (props) => {

  const [fullName , setFullName] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
   
const navigate=useNavigate()

const User = () => {
  const obj = {fullName : fullName , email: email , password:password}
  axios.post("http://127.0.0.1:3000/api/auth/signup" , obj)
  .then((result) => {
    console.log(result);
    navigate("/login")
  })
  .catch((error) => {console.log(error);})
}


  return (
<div>
<div className="wrapper">
<video
          autoPlay
          loop
          muted
          playsInline
          src="video/background1.mp4"
          className="back-video"
        ></video>
    <header>REGISTER</header>
    <form >
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="Your Full Name" onChange={(e) => {setFullName(e.target.value)}}/>
        </div>
        <div className="input-area">
          <input type="text" placeholder=" Your Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className="input-area">
          <input type="password" placeholder=" Your Password" onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
      </div>
      <input onClick={() => {User(); navigate("/login")}} type="submit" value="Sign Up"/>
    </form>
  </div>
</div>

  )
}



export default Register
