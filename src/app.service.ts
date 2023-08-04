import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.model';

@Injectable()
export class AppService {

  constructor(@InjectModel('user') private readonly userModel:Model<User>){

  }
  
  users:any[] =[
    {name:"Ghias", email:"ghias@gmail.com"},
    {name:"Naveed", email:"naveed@gmail.com"},
    {name:"Jibran", email:"jibran@gmail.com"}
  ] 


  async getAllUsers(){
    const users1 = await this.userModel.find().exec();
    return users1;
  }

  getUser(name){
    return this.users.filter(user => user.name == name)
  }

  async addUser(name: string, email: string){
    const user = new this.userModel({name,email})
    const result  = await user.save();

    console.log('result', result)
    return 'userId'
  }

}
