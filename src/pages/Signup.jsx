import React from 'react'
import Template from '../components/Template'

const Signup = ({SetIsLoggedIn}) => {
  return (
    <Template
    title="Welcome"
    desc1="Built skill for today , tomorrow, and beyond"
    desc2="Education to future-proof to your career"
    image="/image/image.jpg"
    formtype="signup"
    SetIsLoggedIn={SetIsLoggedIn}
    />
  )
}

export default Signup
