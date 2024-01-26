import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreationStatusService } from './creation-status.service';
import { CreateCreationStatusDto } from './dto/create-creation-status.dto';
import { UpdateCreationStatusDto } from './dto/update-creation-status.dto';

@Controller('creation-status')
export class CreationStatusController {
  constructor(private readonly creationStatusService: CreationStatusService) {}

  @Post()
  create(@Body() createCreationStatusDto: CreateCreationStatusDto) {
    return this.creationStatusService.create(createCreationStatusDto);
  }

  @Get()
  findAll() {
    return this.creationStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creationStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreationStatusDto: UpdateCreationStatusDto) {
    return this.creationStatusService.update(+id, updateCreationStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creationStatusService.remove(+id);
  }
}
