import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./guards/secret";
import {AuthEntity} from "./entity/auth.entity";
import {ArticleEntity} from "../article/entity/article.entity";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        TypeOrmModule.forFeature([AuthEntity, ArticleEntity]),
        JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: '12d' } }),
    ]
})
export class AuthModule {}