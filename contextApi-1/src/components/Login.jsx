import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'

function Login() {
  return (
    <div>Login
        <input type='text' placeholder='username' />
        <input type='text' placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login