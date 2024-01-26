import { Transform } from "class-transformer";
import { IsOptional, IsString, MinLength } from "class-validator";

export class updateScientistDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    username: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    @IsOptional()
    password: string;
}