import { Module } from '@nestjs/common';
import { CreationStatusService } from './creation-status.service';
import { CreationStatusController } from './creation-status.controller';

@Module({
  controllers: [CreationStatusController],
  providers: [CreationStatusService],
})
export class CreationStatusModule {}
