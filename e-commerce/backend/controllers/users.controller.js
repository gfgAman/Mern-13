import { USERS } from "../models/users.model.js"

export const userSignup = async (req, res) => {
    const { name, email, password, contact } = req.body

    if (!name || !email || !password || !contact)
        return res.status(401).json({ success: false, message: 'all fields required', status: 401 })

    const user = new USERS({
        name,
        email,
        password,
        contact
    })
    await user.save()

    return res.status(200).json({ success: true, message: 'user saved successfully!!', status: 200 })
}

export const getAllUserData = async (req, res) => {
    const data = await USERS.find()

    return res.status(200).json({ success: true, message: 'data found', data })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(401).json({ success: false, message: 'all fields required', status: 401 })

    const data = await USERS.findOne({email})

    if (!data)
        return res.status(404).json({ success: false, message: 'user not found', status: 404 })

    return res.status(200).json({ success: true, message: 'user found', status: 200, data })
}