import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const Template = ({ title, desc1, desc2, formtype, SetIsLoggedIn }) => {
  return (
    <div className='flex flex-col lg:flex-row max-w-[1160px] py-12 mx-auto gap-[100px]'>
      <div className='flex-1'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] ml-4'>{title}</h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-2 ">
        <span className="text-white font-bold block mb-2 ml-[1.2rem] ">{desc1}</span>
        <span className="text-blue-300  block italic mb-2 ml-[1.2rem]">{desc2}</span>
      </p>

        {formtype === 'signup' ? (
          <SignupForm SetIsLoggedIn={SetIsLoggedIn} />
        ) : (
          <LoginForm SetIsLoggedIn={SetIsLoggedIn} />
        )}

        

       
      </div>

      <div className='reletive w-11/12 max-w-[450px]'>
        {/* <img
          src="/image/frameImage.jpg"
          alt="Pattern"
          height={558}
          width={504}
          loading='lazy'
        /> */}
        <img
          src="/image/image.jpg"
          alt="Pattern"
          height={300}
          width={504}
          loading='lazy'
          className='mt-10'
        />
      </div>
    </div>
  );
};

export default Template;
