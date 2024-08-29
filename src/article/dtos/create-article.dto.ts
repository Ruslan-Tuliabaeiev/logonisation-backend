import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";

export class CreateArticleDto{

    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    article: string;
}
