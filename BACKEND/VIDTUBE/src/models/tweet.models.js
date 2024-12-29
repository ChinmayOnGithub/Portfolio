
/* 
    id string pk
    owner ObjectId users
    content string
    createdAt Date
    updatedAt Date 
*/

import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true } // createdAt and updatedAt is added here
)

export const Like = mongoose.model("Like", likeSchema);