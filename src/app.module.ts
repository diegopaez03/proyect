import { Module } from '@nestjs/common';
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
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'proyect',
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      port: 5432,
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
