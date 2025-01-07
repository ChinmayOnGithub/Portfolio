import multer from "multer";
import fs from "fs";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        // TODOs for me
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log('Original file name:', file.originalname); // Debug log
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    },

})