import React from 'react'
import { assets } from '../assets/assets' // உங்கள் assets path சரியாக இருக்கிறதா எனப் பார்க்கவும்

const Footer = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Subscribed successfully! We will verify your email.");
    event.target.reset();
  }

  return (
    <div className='px-4 md:px-16 lg:px-24 py-16 bg-gray-50 border-t border-gray-200'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
        
        {/* Logo Section */}
        <div className='col-span-1 md:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
                 {/* லோகோ இல்லாததால் text மட்டும் வைத்துள்ளேன், லோகோ இருந்தால் <img /> போடவும் */}
                <h2 className='text-2xl font-bold font-playfair flex items-center gap-2'>
                  <span className='bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-lg text-sm'>Q</span> 
                  QuickStay
                </h2>
            </div>
            <p className='text-gray-500 text-sm leading-relaxed mb-6'>
                Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas.
            </p>
            {/* Social Icons (Dummy) */}
            <div className='flex gap-4 text-gray-400'>
                <i className="cursor-pointer hover:text-gray-900">Instagram</i>
                <i className="cursor-pointer hover:text-gray-900">Twitter</i>
                <i className="cursor-pointer hover:text-gray-900">LinkedIn</i>
            </div>
        </div>

        {/* Links Section 1 */}
        <div>
            <h3 className='font-bold mb-6 text-gray-800 uppercase text-xs tracking-wider'>Company</h3>
            <ul className='space-y-4 text-gray-500 text-sm'>
                <li className='hover:text-gray-900 cursor-pointer'>About</li>
                <li className='hover:text-gray-900 cursor-pointer'>Careers</li>
                <li className='hover:text-gray-900 cursor-pointer'>Press</li>
                <li className='hover:text-gray-900 cursor-pointer'>Blog</li>
            </ul>
        </div>

        {/* Links Section 2 */}
        <div>
            <h3 className='font-bold mb-6 text-gray-800 uppercase text-xs tracking-wider'>Support</h3>
            <ul className='space-y-4 text-gray-500 text-sm'>
                <li className='hover:text-gray-900 cursor-pointer'>Help Center</li>
                <li className='hover:text-gray-900 cursor-pointer'>Terms of Service</li>
                <li className='hover:text-gray-900 cursor-pointer'>Privacy Policy</li>
                <li className='hover:text-gray-900 cursor-pointer'>Contact Us</li>
            </ul>
        </div>

        {/* Stay Updated Section */}
        <div>
            <h3 className='font-bold mb-6 text-gray-800 uppercase text-xs tracking-wider'>Stay Updated</h3>
            <p className='text-gray-500 text-sm mb-4'>Subscribe to get the latest travel updates.</p>
            
            <form onSubmit={onSubmitHandler} className='flex gap-2'>
                <input 
                    type="email" 
                    placeholder='Email address' 
                    className='w-full px-4 py-2 bg-gray-200 rounded border border-transparent focus:bg-white focus:border-gray-300 outline-none text-sm transition-all'
                    required
                />
                <button type='submit' className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors'>
                    →
                </button>
            </form>
        </div>

      </div>

      <div className='border-t border-gray-200 mt-12 pt-8 text-center text-gray-400 text-sm'>
        <p>&copy; {new Date().getFullYear()} QuickStay. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer