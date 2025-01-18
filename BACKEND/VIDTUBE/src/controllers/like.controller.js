import mongoose, { isValidObjectId } from "mongoose"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from '../models/user.models.js';
import { Video } from '../models/video.models.js';
import { Like } from '../models/like.models.js';

const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params

  if (!videoId || !mongoose.Types.ObjectId.isValid(videoId)) {
    console.log("Invalid videoId");
    return res.status(400).json(new ApiError(400, "Valid Video ID is required"));
  }

  const user = await User.findById(req.user?._id)
  if (!user) {
    return res.status(401).json(new ApiError(401, "User not found, Please sign in to like this video"))
  }

  const video = await Video.findById(videoId)
  if (!video) {
    return res.status(404).json(new ApiError(404, "Video not found"))
  }
  // check if video is already liked
  const existingLike = await Like.findOne({ video: videoId, likedBy: user._id })
  if (existingLike) {
    await Like.deleteOne({ _id: existingLike._id })
    return res.status(200).json(new ApiResponse(200, "Like removed"))
  } else {
    try {
      const like = await Like.create({
        video: videoId,
        likedBy: user._id
      })
      return res.status(201).json(new ApiResponse(201, "Like added", like))
    } catch (error) {
      return res.status(500).json(new ApiError(500, "An error occurred while adding the like", error))
    }
  }
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params
  //TODO: toggle like on comment


})

const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params
  //TODO: toggle like on tweet
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
  //TODO: get all liked videos

  const user = await User.findById(req.user?._id)
})

export {
  toggleCommentLike,
  toggleTweetLike,
  toggleVideoLike,
  getLikedVideos
}