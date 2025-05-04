import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
        index: true,
        unique:true
    }
})

export const USERS = mongoose.model('USERS', userSchema)