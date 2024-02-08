import {
  IsBoolean,
  IsString,
  MinLength,
} from 'class-validator';


export class UpdateCreationDto {
  @IsString()
  @MinLength(3)
  creationName: string;

  @IsString()
  creationDescription: string;

  @IsBoolean()
  encrypted: boolean;

}
