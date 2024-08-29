import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";

@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    article: string;

    // @ApiProperty()
    // @Column()
    // // @IsNotEmpty()
    // @IsString()
    // @IsDefined()
    // image: string;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @IsString()
    @IsDefined()
    publish_date: Date;
}