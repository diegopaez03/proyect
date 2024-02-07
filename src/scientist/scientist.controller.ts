import { Body, Controller, Post, Get, Delete, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { createScientistDto } from './dto/create-scientist.dto';
import { ScientistService } from './scientist.service';
import { Scientist } from './entities/scientist.entity';
import { updateScientistDto } from './dto/update-scientist.dto';

@Controller('scientist')
export class ScientistController {

    constructor(private scientistService: ScientistService) { }

    //CRUD basico

    @Post()
    createScientist(@Body() newScientist: createScientistDto) {
        return this.scientistService.createScientist(newScientist);
    }

    @Get()
    getScientists(): Promise<Scientist[]> {
        return this.scientistService.getScientists();
    }

    @Delete(':scientistId')
    deleteScientist(@Param('scientistId', ParseIntPipe) scientistId: number) {
        return this.scientistService.deleteScientist(scientistId);
    }

    @Get(':username')
    getScientist(@Param('username') username: string) {
        return this.scientistService.findOneScientistByUsername(username);
    }

    @Patch(':scientistId')
    updateScientist(@Param('scientistId', ParseIntPipe) scientistId: number, @Body() scientist: updateScientistDto){
        return this. scientistService.updateScientist(scientistId, scientist)
    }

}
