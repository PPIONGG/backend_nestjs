import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private usersModel: Model<Users>) {}

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  async create(Users: Users): Promise<Users> {
    const createdUsers = new this.usersModel(Users);
    return createdUsers.save();
  }

  async remove(id: string): Promise<void> {
    await this.usersModel.findByIdAndDelete(id);
  }

  async update(id: string, users: Users): Promise<Users> {
    return this.usersModel.findByIdAndUpdate(id, users, { new: true });
  }
}
