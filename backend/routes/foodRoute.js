import express from "express"

import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

// in the above code, we store our image in the "uploads" folder.
// cb is a bacblack function name in this function we have file name & current date, this current date will get attach wiith the file name due to this name of our files become unique.
// so the final file name be like 1762239995869food_6.png here the numbers are time actually followed by file name 'food'.
const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);


export default foodRouter;


// Note:
// Here, upload.single("image") is behave as middleware.
// Here, upload.single("image") here, "image" is the name of our photo file.