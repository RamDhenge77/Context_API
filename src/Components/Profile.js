import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const context = useContext(UserContext);
    const {userData, visibility} = context;
  return (
    <div>
      <h1 style={{display:`${visibility}`}}>Hello... {userData.userName} !</h1>
    </div>
  )
}

export default Profile
