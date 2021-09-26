import { Body, HttpStatus, Put } from '@nestjs/common';
import { Controller, Delete, Get, Post, Res, } from '@nestjs/common';
import { Response } from "express";
import { Public } from 'src/auth/auth.decorator';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService){}

  @Public()
  @Get()
  async getCats(@Res() res: Response){
    const cats = await this.catService.findAll();
    res.status(HttpStatus.OK).send({ cats });
  }

  @Public()
  @Post()
  async createCat(@Res() res: Response, @Body() cat) {
    console.log("This is the cat", cat)
    const createdCat = await this.catService.create(cat)
    res.status(201).send({ cat: createdCat});
  }

  @Put()
  updateCat() {
    console.log("we want to update a cat here")
  }

  @Delete()
  deleteCat():string {
    console.log("We want to delete a cat here");
    return "Delete cats here"
  }
}
