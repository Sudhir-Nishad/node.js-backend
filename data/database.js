import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017", {
    dbname:"backendAPI"
})
    .then(() => {
        console.log("Database is connected")
    })
    .catch((e)=>console.log(e))
}