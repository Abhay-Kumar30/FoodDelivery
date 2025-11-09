import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//connectDB
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads')); // This line use to get data of 'uploads' folder. 
// So, to access a specific photo in Browser we write http://localhost:4000/images/1762239995869food_6.png

app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req, res)=>{
    res.send("API Working");
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


// mongodb+srv://abhaykumar1taj_db_user:deepu9530@mycluster.rfgypyt.mongodb.net/?

// mongodb+srv://abhaykumar1taj_db_user:deepu9530@mycluster.rfgypyt.mongodb.net/?appName=MyCluster