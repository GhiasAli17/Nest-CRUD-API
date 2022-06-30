import { Injectable } from '@nestjs/common';
import { user } from './user.model';

@Injectable()
export class AppService {
  
  users:user[] =[
    {name:"Ghias", email:"ghias@gmail.com"},
    {name:"Naveed", email:"naveed@gmail.com"},
    {name:"Jibran", email:"jibran@gmail.com"}
  ] 

  getAllUsers(){
    return this.users;
  }

  getUser(name){
    return this.users.filter(user => user.name == name)
  }

  addUser(user){
    this.users.push(user)
    return this.users;
  }

}
