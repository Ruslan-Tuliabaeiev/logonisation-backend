import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthEntity} from "./auth/entity/auth.entity";
import {AuthModule} from "./auth/auth.module";
import {Articlemodule} from "./article/articlemodule";
import {ArticleEntity} from "./article/entity/article.entity";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'nikcode-backend',
      entities: [AuthEntity, ArticleEntity],
      synchronize: true,
    }),
      AuthModule,
      Articlemodule,
  ],
})
export class AppModule {}
