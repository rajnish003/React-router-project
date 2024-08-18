import React from 'react';

const Features = () => {
  return (
    
        <section className="py-16 bg-gray-100 h-[48vh]" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Our Features</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Web devlopment</h3>
            <p>We Create beautiful website for bussiness</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">App Devlopment</h3>
            <p>We Create beautiful Apps for bussiness</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Consultancy</h3>
            <p>We provide best Consultancy Service in india</p>
          </div>
        </div>
      </div>
    </section>
 
  );
};

export default Features;
