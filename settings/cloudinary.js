import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'

const productImgStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'My-LinkedIn'
    }
})
export const uploadOnCloudinary = multer({ storage: productImgStorage })