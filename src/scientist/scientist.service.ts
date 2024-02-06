import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scientist } from './entities/scientist.entity';
import { createScientistDto } from './dto/create-scientist.dto'
import { updateScientistDto } from './dto/update-scientist.dto';

@Injectable()
export class ScientistService {

    constructor(@InjectRepository(Scientist) private scientistRepository: Repository<Scientist>) { }

    async createScientist(scientist: createScientistDto) {

        const scientistFound = await this.scientistRepository.findOneBy({
            username: scientist.username
        })

        if (scientistFound) {
            return new HttpException('Scientist username already exists', HttpStatus.CONFLICT)
        }

        const newScientist = this.scientistRepository.create(scientist)
        return this.scientistRepository.save(newScientist)
    }

    getScientists() {
        return this.scientistRepository.find();
    }

    async getScientist(scientistId: number) {
        const scientistFound = await this.scientistRepository.findOne({
            where: {
                scientistId
            }
        });

        if (!scientistFound) {
            return new HttpException('Scientist not found', HttpStatus.NOT_FOUND)
        }

        return scientistFound

    }

    async findOneScientistByUsername(username: string) {
        const scientistFound = await this.scientistRepository.findOne({
            where: {
                username
            }
        });
        
      return scientistFound

    }

    async deleteScientist(scientistId: number) {
        const result = await this.scientistRepository.softDelete(scientistId);

        if (result.affected === 0) {
            return new HttpException('Scientist not found', HttpStatus.NOT_FOUND)
        }

        return result

    }

    async updateScientist(scientistId: number, scientist: updateScientistDto) {

        const scientistFound = await this.scientistRepository.findOne({
            where: {
                scientistId
            }
        });

        if (!scientistFound) {
            return new HttpException('Scientist not found', HttpStatus.NOT_FOUND)
        }

        const updateScientist = Object.assign(scientistFound, scientist);
        return this.scientistRepository.save(scientistFound);

    }


}
