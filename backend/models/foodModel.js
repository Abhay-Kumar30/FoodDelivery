import mongoose from "mongoose"

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)


export default foodModel;

//Note: food is the name of our collection, the mongodb will automatically make it's name plural, i.e this collection name will be stored as 'foods'
// line: mongoose.models.food || mongoose.model("food", foodSchema) means if a model or collection present of name food then we use that model otherwise we will create a new model.
