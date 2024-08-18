import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-[#21366c] text-white" id="about">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-8">
          At Software Company, we are dedicated to delivering top-notch software solutions that drive innovation and efficiency. Our team of experts is passionate about technology and committed to helping businesses thrive in the digital era.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:w-1/3 border-4 border-indigo-600">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Our Mission</h3>
            <p>
              Our mission is to provide cutting-edge software solutions that solve real-world problems and empower businesses to achieve their goals. We strive for excellence in every project we undertake.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:w-1/3 border-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-4 text-teal-500">Our Vision</h3>
            <p>
              We envision a future where technology seamlessly integrates with daily operations to enhance productivity and foster growth. Our vision drives us to innovate and stay ahead in the ever-evolving tech landscape.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg md:w-1/3 border-4 border-yellow-400">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Our Values</h3>
            <p>
              Integrity, innovation, and customer satisfaction are the core values that guide us. We believe in transparent communication, embracing new ideas, and putting our clients' needs at the forefront of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
