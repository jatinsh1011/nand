import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
   constructor(
    @InjectModel('User')
    private userModel: Model<any>,
    private jwtService: JwtService
  ) {}
  
  async login(userDto: userDto) {
    const {name , password} = userDto
    const found  = await this.userModel.findOne({name})
    if(!found){
      throw new NotFoundException("User not found");
    }
    if(found.password != password){
      throw new UnauthorizedException("Password incorrect");
    }
    const token = this.jwtService.sign({"name" : name})
    
    return { token };
  }
  async register(userDto: userDto) {
    const {name , password} = userDto
    const newUser = new this.userModel({name , password})
    const update = await newUser.save()
    return { message: "User Created Successfully" };
  }
  async data() {
  return [
    {
      id: 1,
      title: "First Item",
      description: "This is the first sample data item",
      price: 120,
    },
    {
      id: 2,
      title: "Second Item",
      description: "Another example item for testing",
      price: 250,
    },
    {
      id: 3,
      title: "Third Item",
      description: "You can map this on the frontend",
      price: 80,
    },
    {
      id: 4,
      title: "Fourth Item",
      description: "Sample data from backend",
      price: 300,
    },
  ];
}
}
