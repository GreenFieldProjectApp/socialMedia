import React , {useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {

  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [loggerId , setLoggerId] = useState("")
   
const body ={
  email:email,
  password:password
}

const getOneUser = () => {
  axios.post("http://127.0.0.1:3000/api/auth/signin",body)
  .then((result) => {
    console.log(result);
    
    props.logger(result)

    navigate("/home")

  })
  .catch((error) => {alert("wrong user or password")})
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
        <header>LOGIN</header>
        <form >
          <div className="field email">
            <div className="input-area">
              <input type="email" placeholder=" Your Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="input-area">
              <input type="password" placeholder=" Your Password" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
          </div>
           <input onClick={() => {getOneUser()}} value="Sign In"/>
        </form>
       
      </div>
    </div>
      )
}



export default Login
