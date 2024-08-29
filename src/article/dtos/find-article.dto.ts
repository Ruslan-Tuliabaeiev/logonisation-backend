import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsString} from "class-validator";

export class FindArticleDto {
    @ApiProperty()
    @IsString()
    @IsDefined()
    article: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    id: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    publish_date: string;
}