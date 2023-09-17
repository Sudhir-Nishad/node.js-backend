import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import cookieParser, { signedCookie } from "cookie-parser";
export const getUser= async (req, res) => {
    // const keyword = req.query.keyword;
    console.log(req.query);
    const users = await User.find({});
    res.json({
        success: true,
        users,
    });
}
export const Register=async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
    {
        return res.status(404).json({
            succses: false,
            message: "User already exist",
        });
        }
    const hashedPassrword = await bcrypt.hash(password, 10)
    user = await User.create({ name, email, password: hashedPassrword });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(201).cookie("token",token).json({
        success: true,
        message:"registered successfully"
    })
    
     
};
export const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user)
        return res.status(404).json({
            success: false,
            message: "user doesn't exist",
        });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        return res.status(404).json({
            success: false,
            message: "Invalid email or password"
        });
    //    sendCookie(user,res,`Welcome back,${user.name}`,200)
    // console.log("successfully login !---")
    else if (isMatch)
        return res.status(200).cookie("token","successfully login") .json({
            success: true,
            message:"successfully login",
            
        })
    //   res.cookie("token",'successfully login')
};
export const Logout = async (req, res) => {
    return res.status(200).cookie("token","",) .json({
        success: true,
        
        // user:req.user,
    })
};
