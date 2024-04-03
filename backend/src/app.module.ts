import { Module } from '@nestjs/common';
import { SwaggerModule } from './config/swagger/swagger.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/database/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), SwaggerModule, UserModule],
  controllers: [],
})
export class AppModule {}
