import express from "express";
import { signup, signin, googleAuth, logout } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup);
//SIGN IN
router.post("/signin", signin);
//GOOGLE AUTH
router.post("/google", googleAuth);

router.post("/logout", logout);

export default router;
