import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../components/features/user'
import { logout } from '../components/features/user'

function Login() {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: 'hash', age: 20, email: 'blabla@gmail.com' }))
        }}
      >Login</button>

      <button
        onClick={()=> {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login