import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongoURI", {
    dbname:"backendAPI"
})
    .then(() => {
        console.log("Database is connected")
    })
    .catch((e)=>console.log(e))
}