import { Controller, Get , Post , Body, Put,Delete, Param } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { AppService } from './app.service';
import { UserDto } from './user.dto';
import { User } from './user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Post()
 async createUser(@Body() userDto : User) {
  return await this.appService.createUser(userDto)
 }

 @Get() 
 async getuser() {
  return await this.appService.getUser()
 }

 @Put(':id')
 async updateUser(@Param('id') id: string ,@Body() updateData:UserDto) {
    return await this.appService.updateUser(id,updateData)
 }

 @Delete(':id')
 async deleteUser(@Param('id') id: string) {
  return await this.appService.deleteUser(id)
 }
//  @Get('/ss') 
//  async getData() {
//   return this.appService.getUser()
//  }

}
