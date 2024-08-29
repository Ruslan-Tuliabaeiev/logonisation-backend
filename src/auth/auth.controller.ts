import {Body, Controller, Get, Post, Req, Res, UseGuards} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {JwtService} from "@nestjs/jwt";
import {AuthEntity} from "./entity/auth.entity";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserAuthDto} from "./dtos/create-user-auth.dto";
import {AuthGuard} from "./guards/jwt-auth.guard";
import * as bcrypt from 'bcrypt';
import {LoginUserAuthDto} from "./dtos/login-user-auth.dto";
import {Response} from "express";

@ApiTags(`/auth`)
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
                private  jwtService: JwtService
                ) {}
    @Post('register')
    @ApiOperation({
        summary: 'Register a user.',
    })
    @ApiResponse({
        status: 201,
        description: 'The user is successfully registered.',
        type: AuthEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'The user cannot be registered.',
    })
    async  register(@Body() createUserAuthDto: CreateUserAuthDto): Promise<AuthEntity> {
        return await this.authService.register(createUserAuthDto)
    }

    @Post('login')
    @ApiOperation({
        summary: 'Login a user.',
    })
    @ApiResponse({
        status: 201,
        description: 'The user is successfully login.',
        type: AuthEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'The user cannot be login.',
    })
    async login(@Body() loginUserAuthDto: LoginUserAuthDto , @Res({ passthrough: true }) response: Response,): Promise<AuthEntity> {
        const user = await this.authService.validateUser(loginUserAuthDto);
        let token = await this.authService.login(user);
        response.cookie('jwt', token, { httpOnly: true })
        delete user.password
        return user;
    }

    @UseGuards(AuthGuard)
    @Get('info')
    async secretInfo(@Req() req)
    {
        return 'Some Info only for registered users' + req.user.id;
    }

}