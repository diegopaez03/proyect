import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScientistModule } from './scientist/scientist.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Scientist } from './scientist/entities/scientist.entity';
import { AuthModule } from './auth/auth.module';
import { CreationModule } from './creation/creation.module';
import { Creation } from './creation/entities/creation.entity';
import { CreationStatusModule } from './creation-status/creation-status.module';
import { CreationStatus } from './creation-status/entities/creation-status.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'proyect',
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      port: 5432,
      entities: [
        Scientist,
        Creation,
        CreationStatus,
      ],
      synchronize: true,
}),
    ScientistModule,
    AuthModule,
    CreationModule,
    CreationStatusModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
