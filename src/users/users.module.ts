import { Global, Module } from '@nestjs/common';
import { UsersService } from './users.service';

// @Global() use this to make this users module global
@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
