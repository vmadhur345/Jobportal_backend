import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"
import connectDB from "./db/connection.js"
import companyRoute from "./routes/company.route.js"
import userRoute from "./routes/user.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from"./routes/application.route.js";

dotenv.config({
    path: './.env'
})



const app =express();


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))


// routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

// database connection
const PORT= process.env
.PORT || 2000

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})