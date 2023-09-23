import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb+srv://Sudhir-Nishad:sudhir123@cluster0.ybyy5vm.mongodb.net/?retryWrites=true", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    dbname:"backendAPI"
})
    .then(() => {
        console.log("Database is connected")
    })
    .catch((e)=>console.log(e))
}