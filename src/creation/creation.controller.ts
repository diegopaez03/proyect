import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreationService } from './creation.service';
import { CreateCreationDto } from './dto/create-creation.dto';
import { UpdateCreationDto } from './dto/update-creation.dto';

@Controller('creation')
export class CreationController {
  constructor(private readonly creationService: CreationService) {}

  @Post()
  create(@Body() createCreationDto: CreateCreationDto) {
    return this.creationService.create(createCreationDto);
  }

  @Get()
  findAll() {
    return this.creationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreationDto: UpdateCreationDto) {
    return this.creationService.update(+id, updateCreationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creationService.remove(+id);
  }
}
