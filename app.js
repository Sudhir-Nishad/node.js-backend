import express from "express";
import { newTask } from "./controllers/task.js";
import { connectDB } from "./data/database.js";
// for env file it means hiding port
import { config } from "dotenv";
// import mongoose from "mongoose";
import router from "./routes/user.js";
import cors from "cors";

// const schema =  mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });
// const User = mongoose.model("User", schema);
const app = express();
connectDB();
config({
    path:"./data/config.env",
});
app.use(express.json());
app.use("/new",newTask);
app.use(router);
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["PUT", "GET", "POST", "DELETE"],
    credentials:true,
}))

app.get("/", (req, res) => {
    res.send("Nice working");
})
// app.get("/users", async (req, res) => {
//     // const keyword = req.query.keyword;
//     console.log(req.query);
//     const users = await User.find({});
//     res.json({
//         success: true,
//         users,
//     });
// });
// app.get("/id", async(req, res) => {
//     const { id } = req.body;
//     //  when we passed id in params instead of body
//     // const { id } = req.query;
//     const user = await User.findById(id);
//     res.json({
//         success: true,
//         user,
//     })
// })
// app.post("/users", async (req, res) => {
//     const { name, email, password } = req.body;

//      await User.create({
//         name,
//         email,
//         password,
//     });
//     res.cookie("temp","lol").json({
//         success: true,
//         message:"Registered successfully",
//     });
// });
app.listen(5000, () => {
    console.log("Server is working");
})