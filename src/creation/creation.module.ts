import { Module } from '@nestjs/common';
import { CreationService } from './creation.service';
import { CreationController } from './creation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Creation } from './entities/creation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Creation])],
  controllers: [CreationController],
  providers: [CreationService],
})
export class CreationModule {}
