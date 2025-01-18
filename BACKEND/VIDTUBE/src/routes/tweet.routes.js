import { Router } from 'express';
import {
  createTweet,
  getUserTweets
} from "../controllers/tweet.controller.js";
import { verifyJWT } from '../middlewares/auth.middleware.js';


const router = Router()


router.route("/create-tweet").post(verifyJWT, createTweet);


// non secure
router.route("/get-user-tweet/:userId").get(getUserTweets)

export default router