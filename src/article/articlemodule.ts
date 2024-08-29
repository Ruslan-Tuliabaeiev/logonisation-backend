import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthEntity} from "../auth/entity/auth.entity";
import {ArticleEntity} from "./entity/article.entity";
import {ArticleService} from "./article.service";
import {ArticleController} from "./article.controller";

@Module({
    controllers: [ArticleController],
    providers: [ArticleService],
    imports: [
        TypeOrmModule.forFeature([ArticleEntity, AuthEntity]),
    ]
})
export class Articlemodule {}