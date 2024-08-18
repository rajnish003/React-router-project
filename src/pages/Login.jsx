import React from 'react'
import Template from '../components/Template'

const Login = ({SetIsLoggedIn}) => {
  
  return (
    <Template
    title="Welcome Back"
    desc1="Built skill for today , tomorrow, and beyond"
    desc2="Education to future-proof to your career"
    image="/image/image.jpg"
    formtype="login"
    SetIsLoggedIn={SetIsLoggedIn}
    />
  )
}

export default Login
