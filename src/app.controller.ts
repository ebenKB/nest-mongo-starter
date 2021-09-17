import { Controller, Request, Get, Post, UseGuards, } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/auth.decorator';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  greetUser(): number {
    return 10;
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('profile/all')
  findAll() {
    return [];
  }
}
