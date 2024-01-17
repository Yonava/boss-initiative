import { Schema } from "mongoose";

export const article = new Schema({
    title : {type: String, required:true},
    synnopsis: {type: String, required:false},
    content: {type: String, required: true},
    date: {type: Date, required: false},
    author: {type: String, required: true},
    authorImgID: {type: String, required: false},
    s3_images_list: {type: [String], required:false},
    tags: {type: [String], required: false}
})
