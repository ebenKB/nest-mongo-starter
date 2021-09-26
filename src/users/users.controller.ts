import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser():string {
    return "User is here";
  }

  @Post()
  createUser(){
    console.log("we want to create a user here");
  }

  @Put()
  editUser(id: string) {
    console.log("We want to edit a user here", id);
  }

  @Delete()
  deleteUser(id: string){
    console.log("We want to delete a user here", id);
  }
}
