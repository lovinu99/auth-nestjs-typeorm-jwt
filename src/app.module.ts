import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guard/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // }
  ],
})
export class AppModule { }
