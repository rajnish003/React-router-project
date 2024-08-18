import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import { toast } from 'react-hot-toast'
  // video time: 49:00
const Navbar = (props) => {
  let isLoggedIn=props.isLoggedIn;
  let SetIsLoggedIn=props.SetIsLoggedIn;
  return (
    <div className='flex justify-around items-center bg-gray-800 text-white pl-4 pr-4 ps-6' >
      <NavLink to="/">
        <img src="/image/raj_logo.png" alt="logo" width={140} loading='lazy' />
      </NavLink>

  <nav className=''>
  <ul className='flex space-x-12 nav-ul'>
    <li className='gap-40 nav-li'>
      <NavLink
        to="/"
        className='text-white text-2xl font-medium hover:text-gray-300 transition duration-300 nav-class'
        activeClassName='text-red-500'
      >
        Home
      </NavLink>
    </li>
    <li className='nav-li'>
      <NavLink
        to="/AboutUs"
        className='text-white text-2xl font-medium hover:text-gray-300 transition duration-300 nav-class'
          activeClassName='text-red-500'
      >
        About
      </NavLink>
    </li>
    <li className='nav-li'>
      <NavLink
        to="/contact"
        className='text-white text-2xl font-medium hover:text-gray-300 transition duration-300 nav-class'
        
      >
        Contact
      </NavLink>
    </li>
  </ul>
</nav>

      <div className='flex space-x-10 > * + *	 gap-30'>

        { !isLoggedIn &&

             <div>
             <Link to="/login">
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded shadow-md transition '>
                 Login
               </button>
             </Link>
             </div>

        }
        
      {  !isLoggedIn &&
         <div>
         <Link to="/signup">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded shadow-md transition'
           
            >
              Sign up
            </button>
          </Link>
         </div>
      }

        { isLoggedIn &&
          <div>
          <Link to="/">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded shadow-md transition'
             onClick={()=>{
              SetIsLoggedIn(false);
              toast.success("logged out")
            }}
            >
              Logout
            </button>
          </Link>
          </div>
        }
        
      {  isLoggedIn &&
         <div>
         <Link to="/dashboard">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded shadow-md transition'>
              Dashboard
            </button>
          </Link>
         </div>
      }

      </div>
    </div>
  )
}

export default Navbar
