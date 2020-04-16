import { Injectable } from '@nestjs/common';
import { UserModel } from '../users/UserModel';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class SignonService {
  constructor(
    @InjectModel('User') private userModel: Model<UserModel>,
    @InjectConnection('users') private connection: Connection,
  ) {}

  async createUser(user: UserModel): Promise<UserModel> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<UserModel[]> {
    return this.userModel.find().exec();
  }
}
