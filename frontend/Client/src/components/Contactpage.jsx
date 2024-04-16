import React from 'react';

export const Contactpage = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = 'anuragpatelcoc@gmail.com'; 
        const subject = 'Inquiry from Contact Us Page';
        const body = `Hello,\n\nI have an inquiry regarding:\n\nName: ${event.target.name.value}\nEmail: ${event.target.email.value}\nMessage: ${event.target.message.value}`;
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 className="text-3xl font-semibold mb-4 text-center">Contact Us</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="border border-gray-300 rounded-md px-4 py-2 w-full" required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 w-full" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="5" className="border border-gray-300 rounded-md px-4 py-2 w-full resize-none" required></textarea>
        </div>

        <div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full ">Submit</button>
        </div>
      </form>
    </div>
  </div>
  );
}


