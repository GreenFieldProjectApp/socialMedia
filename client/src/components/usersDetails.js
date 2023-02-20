import React from 'react'
const UsersDetails = (props) => {
  return (
    <div >
        <img src={props.item.picture}/>
      <h1>{props.item.fullName}</h1>
        <p>{props.item.phoneNumber}</p>
        <h4>{props.item.email}</h4>
    </div>
  )
}
export default UsersDetails