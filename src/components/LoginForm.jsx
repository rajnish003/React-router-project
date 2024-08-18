import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";

const LoginForm = ({ SetIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    SetIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
    <form onSubmit={submitHandler} className="w-full max-w-sm mx-auto p-6  space-y-6">
      
      <div className="space-y-1">
        <label className="block text-white font-semibold">
          Email Address <sup className="text-red-600">*</sup>
        </label>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          name="email"
          className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-1 relative">
        <label className="block text-white font-semibold">
          Password <sup className="text-red-600">*</sup>
        </label>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          name="password"
          className="w-full px-4 py-2  bg-gray-700 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span 
          onClick={() => setShowPassword(prev => !prev)}
          className="absolute top-8 right-4 text-xl cursor-pointer text-gray-500"
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#" className="text-blue-500 text-sm mt-1 inline-block">Forgot password?</Link>
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Log in
      </button>
    </form>
    <div className='flex items-center my-6'>
          <div className='flex-1 h-px bg-gray-600'></div>
          <p className='text-white mx-4'>OR</p>
          <div className='flex-1 h-px bg-gray-600'></div>
        </div>
    <button className='w-full bg-transparent text-white py-2 rounded-md flex flex-row justify-center items-center gap-4 border-solid border-2 border-sky-500 hover:bg-[#88a2e238]'>
          <p className='max-h-8'><FcGoogle /></p>
          <p> Login with Google</p>
        </button>
    </div>
  );
}

export default LoginForm;
