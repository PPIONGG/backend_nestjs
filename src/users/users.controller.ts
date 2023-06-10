import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { Users } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() users: Users): Promise<Users> {
    return this.usersService.create(users);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() users: Users): Promise<Users> {
    return this.usersService.update(id, users);
  }
}
