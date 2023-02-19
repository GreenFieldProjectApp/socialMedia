import React from 'react'

const Users = (props) => {
  return (
    <div>
      {props.users.map((item,key))}
    </div>
  )
}

export default Users
