import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScientistModule } from './scientist/scientist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scientist } from './scientist/entities/scientist.entity';
import { AuthModule } from './auth/auth.module';
import { CreationModule } from './creation/creation.module';
import { Creation } from './creation/entities/creation.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.PGDB_NAME,
      host: process.env.PGDB_HOST,
      username: process.env.PGDB_USERNAME,
      password: process.env.PGDB_PASSWORD,
      port: parseInt(process.env.PGDB_DOCKER_PORT, 10),
      entities: [Scientist, Creation],
      synchronize: true,
    }),
    ScientistModule,
    AuthModule,
    CreationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
