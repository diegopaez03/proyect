import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreationService } from './creation.service';
import { CreateCreationDto } from './dto/create-creation.dto';
import { UpdateCreationDto } from './dto/update-creation.dto';

@Controller('creation')
export class CreationController {
  constructor(private readonly creationService: CreationService) {}

  @Post()
  create(@Body() createCreationDtoArray: CreateCreationDto[]) {
    return this.creationService.create(createCreationDtoArray);
  }

  @Get()
  findAll() {
    return this.creationService.findAll();
  }

  @Get(':username')
  getCreationsByUsername(@Param('username') username: string){
    return this.creationService.getCreationsByUsername(username)
  }

  @Get(':username/:id')
  getCreationByUsernameAndId(
    @Param('username') username: string,
    @Param('id') id: string
  ) {
    return this.creationService.getCreationByUsernameAndId(username, +id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreationDto: UpdateCreationDto) {
    return this.creationService.update(+id, updateCreationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creationService.deleteCreation(+id);
  }
}
