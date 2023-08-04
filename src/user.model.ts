import * as mongoose from 'mongoose'

export const UserSchema =new mongoose.Schema({
   name:String,
   email:String
})

export interface User{
   id:string;
   name:string;
   email:string;
}



