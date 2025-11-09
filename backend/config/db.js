import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhaykumar1taj_db_user:deepu9530@mycluster.rfgypyt.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}