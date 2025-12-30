// client/src/pages/About.jsx
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen px-4 md:px-16 lg:px-24 py-28'>
        <h1 className='text-4xl font-playfair text-center mb-10'>About QuickStay</h1>
        <div className='flex flex-col md:flex-row gap-10 items-center'>
            <div className='md:w-1/2'>
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000" alt="About Us" className='rounded-lg shadow-lg'/>
            </div>
            <div className='md:w-1/2 text-gray-600 space-y-4'>
                <p>Welcome to <strong>QuickStay</strong>, your number one source for all things travel. We're dedicated to giving you the very best of hotel booking experience, with a focus on dependability, customer service, and uniqueness.</p>
                <p>Founded in 2024, QuickStay has come a long way from its beginnings. When we first started out, our passion for "Eco-friendly Travel" drove us to do tons of research, so that QuickStay can offer you the world's most advanced booking platform.</p>
                <p>We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own website.</p>
            </div>
        </div>
    </div>
  )
}

export default About