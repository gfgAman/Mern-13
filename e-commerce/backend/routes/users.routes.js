import express from 'express'

import { getAllUserData, login, userSignup } from "../controllers/users.controller.js"

export const router = express.Router()


router.post('/post', userSignup)
router.get('/get-all-users',getAllUserData)
router.post('/login',login)