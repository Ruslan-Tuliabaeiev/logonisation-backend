import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsString} from "class-validator";

export class UpdateArticleDto {
    @ApiProperty()
    @IsString()
    @IsDefined()
    id: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    article: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    image: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    publish_date: string;

}