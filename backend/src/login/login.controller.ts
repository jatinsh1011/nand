import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { userDto } from './dto/user.dto';
import type { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() userDto: userDto, @Res() res: Response) {
    const result = await this.loginService.login(userDto);

    res.cookie('auth_token', result.token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.json({
      message: 'Logged in Successfully',
    });
  }
  @Post('/register')
  register(@Body() userDto: userDto) {
    return this.loginService.register(userDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/data')
  data() {
    return this.loginService.data();
  }
}
