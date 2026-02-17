import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoldiersModule } from './soldiers/soldiers.module';
import { MedalsModule } from './medals/medals.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RegimentsModule } from './regiments/regiments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRecordsModule } from './service-records/service-records.module';
import { ConflictsModule } from './conflicts/conflicts.module';
import { WantedMedalsModule } from './wanted_medals/wanted_medals.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SoldiersModule,
    MedalsModule, 
    UsersModule, 
    AuthModule, 
    RegimentsModule, ServiceRecordsModule, ConflictsModule, WantedMedalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
