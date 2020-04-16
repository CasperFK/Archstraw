import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { UserModel } from './UserModel';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<UserModel>,
    @InjectConnection('users') connection: Connection,
  ) {}

  async createUser(user: UserModel): Promise<UserModel> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<UserModel[]> {
    return this.userModel.find().exec();
  }

  async findOne(mail: string): Promise<UserModel> {
    return this.userModel.findOne({ email: mail});
  }
}
