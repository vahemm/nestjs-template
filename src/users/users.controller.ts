import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  @Post('many')
  createMany(@Body() usersDto: CreateUserDto[]) {
    return this.usersService.createMany(usersDto);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return this.usersService.updateUser(id, body);
  }
}
