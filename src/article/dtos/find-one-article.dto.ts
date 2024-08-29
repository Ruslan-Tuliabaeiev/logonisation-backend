import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";

export class FindOneArticleDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    id: string;
}