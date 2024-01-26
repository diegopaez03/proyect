import { Injectable } from '@nestjs/common';
import { CreateCreationDto } from './dto/create-creation.dto';
import { UpdateCreationDto } from './dto/update-creation.dto';

@Injectable()
export class CreationService {
  create(createCreationDto: CreateCreationDto) {
    return 'This action adds a new creation';
  }

  findAll() {
    return `This action returns all creation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creation`;
  }

  update(id: number, updateCreationDto: UpdateCreationDto) {
    return `This action updates a #${id} creation`;
  }

  remove(id: number) {
    return `This action removes a #${id} creation`;
  }
}
