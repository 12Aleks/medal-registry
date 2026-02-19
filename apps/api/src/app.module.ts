import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoldiersModule } from './soldiers/soldiers.module';
import { MedalsModule } from './medals/medals.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RegimentsModule } from './regiments/regiments.module';
import { ServiceRecordsModule } from './service-records/service-records.module';
import { ConflictsModule } from './conflicts/conflicts.module';
import { WantedMedalsModule } from './wanted_medals/wanted_medals.module';
import { SoldierAwardModule } from './soldiers-award/soldiers-award.module';
import { ColectionItemModule } from './colections-item/colections-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,                     // для dev
        logging: true,
      }),
    }),
    SoldiersModule,
    MedalsModule,
    UsersModule,
    AuthModule,
    RegimentsModule,
    ServiceRecordsModule,
    ConflictsModule,
    WantedMedalsModule,
    SoldierAwardModule,
    ColectionItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
