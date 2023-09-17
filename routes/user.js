import express from "express";
import User from "../models/user.js";
import {Register, getUser,Login,Logout} from "../controllers/user.js";
const router = express.Router();
router.get("/id", async(req, res) => {
    const { id } = req.body;
    //  when we passed id in params instead of body
    // const { id } = req.query;
    const user = await User.findById(id);
    res.json({
        success: true,
        user,
    })
})
router.get("/users", getUser);
router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
export default router;