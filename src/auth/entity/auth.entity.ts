import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('auth')
export class AuthEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  @IsString()
  email: string;

  @ApiProperty()
  @Column()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  password: string;
}
