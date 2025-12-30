import React, { useState } from 'react'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Hero = () => {

    const { navigate, getToken, axios, setSearchedCities } = useAppContext();
    const [destination, setDestination] = useState("");

    const onSearch = async (e) => {
        e.preventDefault();
        navigate(`/rooms?destination=${destination}`);
        // call api to save recent searched city
        await axios.post('/api/user/store-recent-search', { recentSearchedCity: destination }, {
            headers: { Authorization: `Bearer ${await getToken()}` }
        });
        // add destination to searchedCities max 3 recent searched cities
        setSearchedCities((prevSearchedCities) => {
            const updatedSearchedCities = [...prevSearchedCities, destination];
            if (updatedSearchedCities.length > 3) {
                updatedSearchedCities.shift();
            }
            return updatedSearchedCities;
        });
    }

    return (
     <div 
      className='min-h-screen mb-4 bg-cover bg-center flex items-center justify-center' 
      // 👇 இந்த லிங்க் 100% வேலை செய்யும் (Luxury Resort) 👇
      style={{backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}
    >
      <div className='bg-black/30 w-full h-full absolute top-0 left-0'></div>
      
      <div className='relative z-10 text-white text-center px-4'>
          <span className='bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm'>The Ultimate Hotel Experience</span>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mt-6 mb-4 leading-tight'>
             Discover Your Perfect <br/> Gateway Destination
          </h1>
          <p className='text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90 mb-8'>
             Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
          </p>
      </div>
    </div>
  )
}

export default Hero