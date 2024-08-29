import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";

export class DeleteArticleDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    id: string;
}