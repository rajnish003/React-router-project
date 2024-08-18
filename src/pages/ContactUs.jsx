import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-[#21366c] w-full" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg mb-4">
              Have any questions or need support? Feel free to reach out to us using the contact details below.
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a>
            </p>
            <p className="text-lg">
              <strong>Email:</strong> <a href="mailto:info@softwarecompany.com" className="text-blue-600 hover:underline">info@softwarecompany.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
