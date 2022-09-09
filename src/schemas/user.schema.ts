import { Schema, model, Model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

interface IUserModel extends Model<IUser>{}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model<IUser, IUserModel>('User', userSchema)

export {
    User
}