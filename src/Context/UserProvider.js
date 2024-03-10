import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = (props) => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState({userName, password})
    const [visibility, setVisibility] = useState("none")

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({userName,password});
        setVisibility("");
    }
    return (
        <UserContext.Provider value={{ setUserName, setPassword, userName, password, handleSubmit, userData, visibility }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
