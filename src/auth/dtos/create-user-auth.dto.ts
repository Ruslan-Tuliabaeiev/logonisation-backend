import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";

export class CreateUserAuthDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

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
