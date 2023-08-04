import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
     'mongodb://127.0.0.1:27017/usersdb'
     ),
     MongooseModule.forFeature([{name:'user',schema:UserSchema}])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
