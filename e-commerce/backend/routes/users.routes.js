import express from 'express'

import { deleteUserData, getAllUserData, login, updateUserData, userSignup } from "../controllers/users.controller.js"

export const router = express.Router()


router.post('/post', userSignup)
router.get('/get-all-users', getAllUserData)
router.post('/login', login)
router.put('/update',updateUserData)
router.delete('/delete/:email',deleteUserData)