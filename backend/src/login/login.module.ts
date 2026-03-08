import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import User, { userSchema } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    JwtModule.register({
      secret: 'mySecretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],

  controllers: [LoginController],
  providers: [LoginService , JwtStrategy],
})
export class LoginModule {}
