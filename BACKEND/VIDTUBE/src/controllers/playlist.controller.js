import mongoose, { isValidObjectId } from "mongoose"
import { Playlist } from "../models/playlist.models.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.models.js"


const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body
  //TODO: create playlist 
  if (!name) {
    return res.status(400).json(new ApiError(400, "Please provide name of the playlist"));
  }
  // description is optional

  // re-validating the user for confirmation
  if (!req.user || !req.user._id) {
    return res.status(401).json(new ApiError(401, "Unauthorized"));
  }
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json(new ApiError(404, "User not found"));
  }

  try {
    const playlist = await Playlist.create({
      name,
      description,
      owner: req.user._id,
    })
    return res.status(200).json(new ApiResponse(200, "Created playlist successfully", playlist));
  } catch (error) {
    return res
      .status(404)
      .json(new ApiError(404, "Something went wrong while creating playlist", error));
  }
});

const getUserPlaylists = asyncHandler(async (req, res) => {
  const { userId } = req.params
  //TODO: get user playlists
})

const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params
  //TODO: get playlist by id
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params
  // TODO: remove video from playlist

})

const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params
  // TODO: delete playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params
  const { name, description } = req.body
  //TODO: update playlist
})

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist
}