import React from 'react'
import Card from '../UI/Card'
const UserLIst = (props) => {
  return (
    <Card>
    <ul style={{

          listStyleType:'none'
        }}  >
        {props.users.map((user) =>(
        <li style={{padding:'5px',}} key={user.id}>
            {user.name} ({user.age}years Old)
            </li>
            ))}
    </ul>
    </Card>
  )
}

export default UserLIst
