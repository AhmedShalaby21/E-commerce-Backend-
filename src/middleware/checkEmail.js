import bcrypt from 'bcrypt'
import { User } from '../../database/models/user.model.js'

export const checkEmail = async(req,res, next)=>{
let isUserExists = await User.findOne({email:req.body.email})
if(isUserExists) return res.status(409).json({message: "email already exsist"})

req.body.password = bcrypt.hashSync(req.body.password,8)
next()
}