import { Router } from "express";
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {
    getAllVideos,
    publishAVideo,
} from "../controllers/video.controller.js"
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// secure routes that need to be signed in 
router.route("/publish").post(
    verifyJWT,
    upload.fields([
        {
            name: "videoFile",
            maxCount: 1
        },
        {
            name: "thumbnail",
            maxCount: 1
        },
    ]),
    publishAVideo);


// routes accessed by anyone
router.route("/get-video").get(getAllVideos);



export default router