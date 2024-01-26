import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ScientistService } from 'src/scientist/scientist.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly scientistService: ScientistService,
        private readonly jwtService: JwtService
        ) { }

    async register({ username, password }: RegisterDto) {
        const scientistFound = await this.scientistService.findOneScientistByUsername(username);

        if (scientistFound) {
            return new HttpException('Scientist username already exists', HttpStatus.CONFLICT)
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        await this.scientistService.createScientist({
            username,
            password: hashedPassword,
        });

        return {
            message: "Scientist created successfully",
        };
    }

    async login({ username, password }: LoginDto) {
        const scientistFound = await this.scientistService.findOneScientistByUsername(username);

        if (!scientistFound) {
            return new HttpException('Invalid username', HttpStatus.CONFLICT);
        }

        const isPasswordValid = await bcryptjs.compare(password, scientistFound.password);

        if (!isPasswordValid) {
            return new HttpException('Invalid password', HttpStatus.CONFLICT);
        }

        const payload = { scientistFound: scientistFound.username };

        const token = await this.jwtService.signAsync(payload);

        return {
            token: token,
            scientistFound: scientistFound.username,
          };
    }

}
