import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  async getAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }
  async createUser(userDto: CreateUserDto) {
    const user = await this.userRepository.save(userDto);
    return user;
  }
  async createMany(usersdto: CreateUserDto[]) {
    return await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(usersdto)
      .execute();
  }
  async deleteUser(id: number) {
    const user = await this.userRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :poxos', { poxos: id })
      .execute();
    return user;
  }
  async updateUser(id: number, body) {
    const user = await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ ...body })
      .where('id = :id', { id })
      .execute();
    return user;
  }
}
