import mongoose, { isValidObjectId } from 'mongoose';
import { Video } from '../models/video.models.js';
import { User } from '../models/user.models.js';
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy = 'createdAt', sortType = 'desc', userId } = req.query;

    const filter = {};
    if (userId) {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json(new ApiError(404, "User not found!"));
        }
        filter.owner = userId; // This userId is the owner of the videos we want to search
    }

    if (query) {
        filter.$or = [
            {
                title:
                {
                    $regex: query,
                    $options: 'i'
                }
            },
            {
                description:
                {
                    $regex: query,
                    $options: 'i'
                }

            }
        ];
    }

    const videos = await Video
        .find(filter)
        .sort({ [sortBy]: sortType === 'desc' ? -1 : 1 })
        .skip((page - 1) * limit)
        .limit(limit);

    console.log(filter.owner);

    res
        .status(200)
        .json(new ApiResponse(200, "Videos fetched successfully", videos));
});

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body
    // TODO: get video, upload to cloudinary, create video
})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}