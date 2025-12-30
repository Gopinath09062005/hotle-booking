import { useAuth, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

axios.defaults.baseURL = "https://hotel-booking-0ppw.onrender.com";
const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate();
    const { user } = useUser();
    const { getToken } = useAuth()

    const [isOwner, setIsOwner] = useState(false);
    const [showHotelReg, setShowHotelReg] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [searchedCities, setSearchedCities] = useState([]); // max 3 recent searched cities

    const facilityIcons = {
        "Free WiFi": assets.freeWifiIcon,
        "Free Breakfast": assets.freeBreakfastIcon,
        "Room Service": assets.roomServiceIcon,
        "Mountain View": assets.mountainIcon,
        "Pool Access": assets.poolIcon,
    };

    // client/src/context/AppContext.jsx உள்ளே...

    const fetchUser = async () => {
        try {
            // Clerk-ல் இருந்து User விவரங்களை எடுத்து Backend-க்கு அனுப்புதல்
            if (user) {
                const { data } = await axios.post('/api/user/login', 
                    { 
                        username: user.fullName, 
                        email: user.primaryEmailAddress.emailAddress, 
                        image: user.imageUrl 
                    }, 
                    { headers: { Authorization: `Bearer ${await getToken()}` } }
                );

                if (data.success) {
                    setIsOwner(data.user.role === "hotelOwner");
                    setSearchedCities(data.user.recentSearchedCities);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error(error);
            // toast.error(error.message); // Error வந்தால் காட்ட வேண்டாம், Silent-ஆ இருக்கட்டும்
        }
    }

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms')
            if (data.success) {
                setRooms(data.rooms)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (user) {
            fetchUser();
        }
    }, [user]);

    useEffect(() => {
        fetchRooms();
    }, []);

    const value = {
        currency, navigate,
        user, getToken,
        isOwner, setIsOwner,
        axios,
        showHotelReg, setShowHotelReg,
        facilityIcons,
        rooms, setRooms,
        searchedCities, setSearchedCities
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

};

export const useAppContext = () => useContext(AppContext);