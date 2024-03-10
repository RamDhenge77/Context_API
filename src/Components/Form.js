import React, { useContext } from 'react'
import Profile from './Profile'
import UserContext from '../Context/UserContext'

const Form = () => {

    const context = useContext(UserContext);

    const {userName, setUserName, password, setPassword, handleSubmit} = context;
    return (
        <div className='container w-25 mt-5'>
            <h2 className='my-4'>Form</h2><hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)} required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} required
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
            <div className='mt-5'>
                <Profile />
            </div>
        </div>
    )
}

export default Form
