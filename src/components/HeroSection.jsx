import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Your Business with Cutting-Edge Software Solutions</h2>
        <p className="text-lg mb-8">We provide innovative solutions to help your business succeed in the digital age.</p>
        <a href="contact" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">Get in Touch</a>
      </div>
    </section>
  );
};

export default HeroSection;
