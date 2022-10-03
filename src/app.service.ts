import { Injectable } from '@nestjs/common';
import { User , UserDocument } from './user.model';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';


@Injectable()
export class AppService {
 constructor(
  @InjectModel('user') private readonly userModel: Model<UserDocument>
 ){}

 //Create User
 async createUser(user: User): Promise<User> {
  const newUser = await new this.userModel(user)
  return newUser.save()
 }

 //Get Users
 async getUser() {
  return await this.userModel.find({})
  .then((user) => {return user})
  .catch((err) => console.log(err))
 }
 
async getData() {
  return "hiii"
}

//Update User
async updateUser(id, user): Promise<User> {
  return await this.userModel.findByIdAndUpdate(id, user, {new: true})
}

//Delete User


async deleteUser(id) {
  return await this.userModel.findByIdAndDelete(id)
}
}
