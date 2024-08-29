import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";

export class LoginUserAuthDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    password: string;
}