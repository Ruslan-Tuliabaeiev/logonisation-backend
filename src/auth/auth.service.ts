import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AuthEntity} from "./entity/auth.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import {CreateUserAuthDto} from "./dtos/create-user-auth.dto";
import * as bcrypt from 'bcrypt';
import {LoginUserAuthDto} from "./dtos/login-user-auth.dto";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthEntity) private readonly authEntityRepository: Repository<AuthEntity>,
                private readonly jwtService: JwtService
                ) {}

    async register(user: CreateUserAuthDto): Promise<AuthEntity> {
        // const findUser = await this.authEntityRepository.findBy(user)
        // if (findUser) {
        //     throw new UnauthorizedException('Such a user is already registered');
        // }
        user.password = await bcrypt.hash(user.password, 10)
        return this.authEntityRepository.save(user)

    }

    async validateUser({email, password}: LoginUserAuthDto): Promise<AuthEntity | undefined> {
        const user = await this.authEntityRepository.findOne({where:{email}});
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid ')
        }
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return undefined;
    }

    async login(user: AuthEntity) {
        const payload = { username: user.name, sub: user.id };
        let token =  this.jwtService.sign(payload);
        return token;
    }
}