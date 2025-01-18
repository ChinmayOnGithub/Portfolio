import { Router } from 'express';
import { addComment } from "../controllers/comment.controller.js";
import { verifyJWT } from '../middlewares/auth.middleware.js';


const router = Router()


// secure routes
router.route("/add-comment/:videoId").post(verifyJWT, addComment)



// not secure routes
// router.route("/get-video-comments").get(getVideoComments)



export default router