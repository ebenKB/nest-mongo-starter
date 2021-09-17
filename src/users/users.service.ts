import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: "Jphn",
      password: "password"
    },
    {
      id: 2,
      username: "username",
      password: "password",
    },
    {
      id: 3,
      username: "test",
      password: "test",
    }
  ]

  async findOne(username: string):Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
