import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
// import { PiStudent } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";


const SignupForm = ({ SetIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass,setShowConfirmPass]=useState(false);
  const [accountType,setAccountType]=useState(0)


  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    SetIsLoggedIn(true);
    toast.success("Account Created");
    

    const accountData = {
      ...formData,
    };

    const finalData ={
      ...accountData,
      accountType
    }
    console.log(JSON.stringify(finalData, null, 2));
    navigate("/dashboard");
  }

  
  function clickHandler(e){
   
    setAccountType(e);

    // console.log(`SignUp form via ${e}` );
    // console.log(e);
   
  }
  return (
    <div className=" p-8 ">
      <div className="flex justify-stretch gap-8 mb-6 ">
        <button className={`bg-gray-700 text-white font-bold py-2 px-4 rounded-full ${accountType === "student" ? "bg-yellow-400 text-black": ""}`}
          onClick={()=>clickHandler("student")}
          // name="student"
        >Student</button>
         
        <button className={`bg-gray-700 text-white font-bold py-2 px-4 rounded-full ${accountType === "instructor" ? "bg-yellow-400 text-black": ""}`}
        onClick={()=>clickHandler("instructor")}
        // name="instructor"
        >Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <label>
            <p className="text-gray-300 mb-2">First Name <sup className="text-red-500">*</sup></p>
            <input 
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </label>
          <label>
            <p className="text-gray-300 mb-2">Last Name <sup className="text-red-500">*</sup></p>
            <input 
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </label>
        </div>

        <label className="block mb-6">
          <p className="text-gray-300 mb-2">Email Address <sup className="text-red-500">*</sup></p>
          <input 
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email"
            value={formData.email}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <label className="relative">
            <p className="text-gray-300 mb-2">Create Password <sup className="text-red-500">*</sup></p>
            <input 
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none pr-10"
            />
            <span 
              onClick={() => setShowPassword((prev) => !prev)} 
              className="absolute right-3 top-12 cursor-pointer text-gray-400"
            >  
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label className="relative">
            <p className="text-gray-300 mb-2">Confirm Password <sup className="text-red-500">*</sup></p>
            <input 
              required
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none pr-10"
            />
            <span 
              onClick={() => setShowConfirmPass((prev) => !prev)} 
              className="absolute right-3 top-12 cursor-pointer text-gray-400"
            >  
              {showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">Create Account</button>
      </form>
      <div className='flex items-center my-6'>
          <div className='flex-1 h-px bg-gray-600'></div>
          <p className='text-white mx-4'>OR</p>
          <div className='flex-1 h-px bg-gray-600'></div>
        </div>
      <button className='w-full bg-transparent text-white py-2 rounded-md flex flex-row justify-center items-center gap-4 border-solid border-2 border-sky-500 hover:bg-[#88a2e238]'>
          <p className='max-h-8'><FcGoogle /></p>
          <p> Sign up with Google</p>
        </button>
    </div>
  );
};

export default SignupForm;
