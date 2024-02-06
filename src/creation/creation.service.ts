import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCreationDto } from './dto/create-creation.dto';
import { UpdateCreationDto } from './dto/update-creation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Creation } from './entities/creation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreationService {
  constructor(
    @InjectRepository(Creation)
    private creationRepository: Repository<Creation>,
  ) {}

  async create(createCreationDtoOrArray: CreateCreationDto | CreateCreationDto[]) {
    const createCreationDtos = Array.isArray(createCreationDtoOrArray) ? createCreationDtoOrArray : [createCreationDtoOrArray];
    const results = [];

    for (const createCreationDto of createCreationDtos) {
      const creationFound = await this.creationRepository.findOne({
        where: {
          creationName: createCreationDto.creationName,
        },
      });
  
      if (creationFound) {
        throw new HttpException(
          'Creation name already exists',
          HttpStatus.CONFLICT,
        );
      }
  
      const newCreation = this.creationRepository.create(createCreationDto);
      results.push(await this.creationRepository.save(newCreation));
    }
    return results;
  }

  findAll() {
    return this.creationRepository.find();
  }

  async getCreationsByUsername(username: string): Promise<Creation[]> {
    const creationFound = this.creationRepository.find({ where: { scientist: { username } } })

    if (!creationFound) {
      throw new HttpException('Creation not found', HttpStatus.NOT_FOUND);
    }
    return creationFound;
  }

  async findOne(creationId: number) {
    const creationFound = await this.creationRepository.findOne({
      where: {
        creationId,
      },
    });

    

    return creationFound;
  }

  async update(creationId: number, updateCreationDto: UpdateCreationDto) {
    const creationFound = await this.creationRepository.findOne({
      where: {
        creationId
      }
    });

    if (!creationFound) {
      return new HttpException('Creation not found', HttpStatus.NOT_FOUND)
  }

  const updateCreation = Object.assign(creationFound, updateCreationDto);
  return this.creationRepository.save(updateCreation);
  }

  async deleteCreation(creationId: number) {
    const result = await this.creationRepository.softDelete(creationId);
    if (result.affected === 0) {
      return new HttpException('Creation not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
