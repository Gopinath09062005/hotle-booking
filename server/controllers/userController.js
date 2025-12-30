
// Get User data using Token (JWT)
// GET /api/user/
export const getUserData = async (req, res) => {
  try {
    const role = req.user.role;
    const recentSearchedCities = req.user.recentSearchedCities;
    res.json({ success: true, role, recentSearchedCities });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Store User Recent Searched Cities
// POST /api/user/recent-searched-cities
export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCity } = req.body;
    const user = await req.user;
    // Store max 3 recent searched cities
    if (user.recentSearchedCities.length < 3) {
      user.recentSearchedCities.push(recentSearchedCity);
    } else {
      user.recentSearchedCities.shift();
      user.recentSearchedCities.push(recentSearchedCity);
    }
    await user.save();
    res.json({ success: true, message: "City added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// server/controllers/userController.js
// ... பழைய கோடுகள் ...

import User from "../models/User.js"; // மேலே import இருப்பதை உறுதி செய்யவும்

// புதுசா இந்த login ஃபங்ஷனை சேர்க்கவும் (Sync User)
export const login = async (req, res) => {
    try {
        const { userId } = req.auth;
        const { username, email, image } = req.body;

        if (!userId || !username || !email) {
            return res.json({ success: false, message: "Missing Details" });
        }

        let user = await User.findById(userId);

        if (!user) {
             // பயனர் இல்லையென்றால் புதிதாக உருவாக்கு
            user = await User.create({ _id: userId, username, email, image, recentSearchedCities: [] });
        }

        res.json({ success: true, user });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}