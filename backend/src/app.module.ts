import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [LoginModule , MongooseModule.forRoot('mongodb+srv://jatin:jatin@cluster0.3sy0szi.mongodb.net/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
