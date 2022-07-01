import { Controller, Get,Body,Param, Post } from '@nestjs/common';
import { AppService } from './app.service';



@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllUsers(){
    return this.appService.getAllUsers();
  }
 
  @Get(":name")
  getUser(@Param("name") name){
    return this.appService.getUser(name)
  }

  @Post("add")
  async addUser(
    @Body("name") name:string,
    @Body("email") email:string){
        
     const id = await this.appService.addUser(name,email)

     return {id}

     

  }
}
