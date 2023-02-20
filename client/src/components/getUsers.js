import React from 'react'
import UsersDetails from './usersDetails'
const GetUsers = (props) => {
  return (
    <div>
        <div className='users'>
        {props.getUser.map((item) =>
        (
              <div>
                     <UsersDetails item = {item}/>
              </div>
             ))}
        </div>
    </div>
  )
}
export default GetUsers