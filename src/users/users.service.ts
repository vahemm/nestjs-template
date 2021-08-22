import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async getAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }
  async createUser(userDto: CreateUserDto) {
    const user = await this.userRepository.save(userDto);
    return user;
  }
}
