import { Module } from '@nestjs/common';
import { ScientistService } from './scientist.service';
import { ScientistController } from './scientist.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Scientist } from './entities/scientist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scientist])],
  providers: [ScientistService],
  controllers: [ScientistController],
  exports: [ScientistService],
})
export class ScientistModule { }
