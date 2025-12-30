import React from 'react'

const Newsletter = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault(); // பக்கம் Refresh ஆவதை தடுக்கும்
    alert("Thank you for subscribing! You will stay inspired."); // பாப்-அப் வரும்
    event.target.reset(); // டைப் செய்த ஈமெயிலை அழித்துவிடும்
  }

  return (
    <div className='mx-4 md:mx-16 lg:mx-24 my-16'>
      <div className='bg-gray-900 text-white py-16 px-6 md:px-16 rounded-3xl text-center'>
          <h2 className='text-3xl md:text-4xl font-playfair font-bold mb-4'>Stay Inspired</h2>
          <p className='text-gray-400 mb-8 max-w-xl mx-auto'>
            Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
          </p>

          <form onSubmit={onSubmitHandler} className='max-w-md mx-auto flex flex-col sm:flex-row gap-4'>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white transition-colors'
              required
            />
            <button type='submit' className='bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
              Subscribe →
            </button>
          </form>
          
          <p className='text-xs text-gray-500 mt-4'>
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
      </div>
    </div>
  )
}

export default Newsletter