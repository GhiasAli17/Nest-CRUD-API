import { Controller, Get,Body,Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './user.model';



@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers(){
    return this.appService.getAllUsers();
  }
 
  @Get(":name")
  getUser(@Param("name") name){
    return this.appService.getUser(name)
  }

  @Post("add")
  addUser(
    @Body("name") name:string,
    @Body("email") email:string){

    return {name,email};

  }
}
