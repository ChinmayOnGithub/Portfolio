import { Router } from "express"
import { createPlaylist } from "../controllers/playlist.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"


const router = Router()

// secure routes
router.route("/create-playlist").post(verifyJWT, createPlaylist);


export default router;