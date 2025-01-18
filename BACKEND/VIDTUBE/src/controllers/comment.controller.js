import mongoose, { isValidObjectId } from "mongoose"
import { Comment } from "../models/comment.models.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
  //TODO: get all comments for a video
  const { videoId } = req.params
  const { page = 1, limit = 10 } = req.query



})

const addComment = asyncHandler(async (req, res) => {
  // TODO: add a comment to a video
  // user is already verified using auth function

  const { videoId } = req.params
  const { content } = req.body

  if (!content) {
    return res
      .status(400)
      .json(new ApiError(400, "Content is required"))
  }
  if (!videoId || !isValidObjectId(videoId)) {
    return res
      .status(400)
      .json(new ApiError(400, "Video id is not valid"))
  }

  try {

    const comment = await Comment.create({
      content,
      video: videoId,
      ower: req.user?._id
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Added comment successfully", comment))

  } catch (error) {
    console.log("Cant add a comment");

    return res
      .status(500)
      .json(new ApiError(500, "Something went wrong", error));
  }

});

const updateComment = asyncHandler(async (req, res) => {
  // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: delete a comment
})

export {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment
}