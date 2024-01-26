import { Injectable } from '@nestjs/common';
import { CreateCreationStatusDto } from './dto/create-creation-status.dto';
import { UpdateCreationStatusDto } from './dto/update-creation-status.dto';

@Injectable()
export class CreationStatusService {
  create(createCreationStatusDto: CreateCreationStatusDto) {
    return 'This action adds a new creationStatus';
  }

  findAll() {
    return `This action returns all creationStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creationStatus`;
  }

  update(id: number, updateCreationStatusDto: UpdateCreationStatusDto) {
    return `This action updates a #${id} creationStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} creationStatus`;
  }
}
