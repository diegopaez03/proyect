import {
  IsBoolean,
  IsString,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Scientist } from 'src/scientist/entities/scientist.entity';

export class UpdateCreationDto {
  @IsString()
  @MinLength(3)
  creationName: string;

  @IsString()
  creationDescription: string;

  @IsString()
  @Length(10)
  keyCode: string;

  @IsBoolean()
  encrypted: boolean;

  @ValidateNested()
  @Type(() => Scientist)
  scientist: Scientist;
}
