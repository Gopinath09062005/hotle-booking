// client/src/pages/Experience.jsx
import React from 'react'

const Experience = () => {
  return (
    <div className='min-h-screen px-4 md:px-16 lg:px-24 py-28'>
        <h1 className='text-4xl font-playfair text-center mb-6'>Luxury Experiences</h1>
        <p className='text-center text-gray-500 mb-12'>Discover activities that make your stay unforgettable.</p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card 1 - Spa & Wellness (Man getting massage - Correct Image) */}
            <div className='rounded-xl overflow-hidden shadow-lg border border-gray-100'>
                {/* 👇 இந்த லிங்க் ஒரு ஆண் மசாஜ் செய்யும் படம் (Man in Spa) 👇 */}
                <img 
                    src="https://i.pinimg.com/originals/60/ca/5c/60ca5c43e275c745f35063e760a8d2c9.jpg" 
                    className='w-full h-48 object-cover' 
                    alt="Man Spa Wellness"
                />
                <div className='p-6'>
                    <h3 className='font-bold text-xl mb-2'>Spa & Wellness</h3>
                    <p className='text-gray-600 text-sm'>Rejuvenate your body and mind with our world-class spa treatments and yoga sessions.</p>
                </div>
            </div>

             {/* Card 2 - Fine Dining */}
             <div className='rounded-xl overflow-hidden shadow-lg border border-gray-100'>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000" className='w-full h-48 object-cover' alt="Fine Dining"/>
                <div className='p-6'>
                    <h3 className='font-bold text-xl mb-2'>Fine Dining</h3>
                    <p className='text-gray-600 text-sm'>Experience culinary masterpieces prepared by Michelin-star chefs.</p>
                </div>
            </div>

             {/* Card 3 - Adventure Tours */}
             <div className='rounded-xl overflow-hidden shadow-lg border border-gray-100'>
                <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000" className='w-full h-48 object-cover' alt="Adventure Tours"/>
                <div className='p-6'>
                    <h3 className='font-bold text-xl mb-2'>Adventure Tours</h3>
                    <p className='text-gray-600 text-sm'>Explore the local culture and nature with our guided private tours.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience