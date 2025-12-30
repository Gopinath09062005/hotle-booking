// server/routes/userRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserData, storeRecentSearchedCities, login } from "../controllers/userController.js"; // login ஐ இங்கே import செய்யவும்

const userRouter = express.Router();

userRouter.get("/", protect, getUserData);
userRouter.post("/store-recent-search", protect, storeRecentSearchedCities);

// இந்த புது வரியை சேர்க்கவும்
userRouter.post("/login", protect, login);

export default userRouter;