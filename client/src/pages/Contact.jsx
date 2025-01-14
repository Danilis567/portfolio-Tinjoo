import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex flex-col items-center my-20 px-4'>
      <h2 className='font-bold text-5xl text-dark mb-10'>Contact Us</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-[944px]  p-6 rounded-lg '>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-dark font-medium'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded focus:outline-none focus:border-primary'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-dark font-medium'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded focus:outline-none focus:border-primary'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='subject' className='text-dark font-medium'>Subject</label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded focus:outline-none focus:border-primary'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='message' className='text-dark font-medium'>Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded focus:outline-none focus:border-primary h-40'
              required
            />
          </div>

          <button type='submit' className='custom-btn  '>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
