import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { UserModel } from '../users/UserModel';

@Injectable()
export class SigninService {
  constructor(
    @InjectModel('User') private userModel: Model<UserModel>,
    @InjectConnection('users') connection: Connection,
  ) {}

  async findOne(user: UserModel): Promise<UserModel> {
    return this.userModel.findOne({ email: user.email });
  }
}
