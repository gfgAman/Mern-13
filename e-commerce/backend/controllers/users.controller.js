import { USERS } from "../models/users.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

let token = ''
export const userSignup = async (req, res) => {
    const { name, email, password, contact } = req.body


    if (!name || !email || !password || !contact)
        return res.status(401).json({ success: false, message: 'all fields required', status: 401 })


    const saltVal = 10
    const hashedPassword = await bcrypt.hash(password, saltVal)


    const user = new USERS({
        name,
        email,
        password: hashedPassword,
        contact
    })
    await user.save()

    token = await jwt.sign({ username: user.name, password: user.password, email: user.email }, process.env.SECRET_KEY,{expiresIn:'1hr'})
    // return res.status(200).json({ success: true, message: 'user saved successfully!!', status: 200 })
    res.send(token)
}

export const getAllUserData = async (req, res) => {
    const data = await USERS.find()

    return res.status(200).json({ success: true, message: 'data found', data })
}

export const login = async (req, res) => {
    const { email, password, token } = req.body

    if (!email || !password)
        return res.status(401).json({ success: false, message: 'all fields required', status: 401 })

    const data = await USERS.findOne({ email })


    if (!data)
        return res.status(404).json({ success: false, message: 'user not found', status: 404 })

    const isMatch = await bcrypt.compare(password, data.password)

    if (!isMatch)
        return res.status(409).json({ success: false, message: 'incorrect password', status: 409 })

    const isVerified = await jwt.verify(token, process.env.SECRET_KEY)

    if (!isVerified)
        return res.status(409).json({ success: false, message: 'invalid token,please signup again', status: 409 })

    return res.status(200).json({ success: true, message: 'user found', status: 200, data })
}



export const updateUserData = async (req, res) => {
    const { email } = req.query
    const { name } = req.body

    const user = await USERS.findOneAndUpdate({ email }, { $set: { name: name } })

    // if (!user)
    //     return res.status(404).json({ success: false, status: 404, message: 'user not found' })

    // user.name = name

    user.save()

    return res.status(200).json({ success: true, status: 200, message: 'user data updated successfully!!!' })

}

export const deleteUserData = async (req, res) => {
    const { email } = req.params

    await USERS.findOneAndDelete({ email })
    return res.status(200).json({ success: true, status: 200, message: 'user delete successfully!!!' })
}