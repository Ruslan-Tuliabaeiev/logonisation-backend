/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './entity/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dtos/create-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
import * as constants from 'constants';
import { DeleteArticleDto } from './dtos/delete-article.dto';
import { FindOneArticleDto } from './dtos/find-one-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleEntityRepository: Repository<ArticleEntity>,
  ) {}

  async create({ article }: CreateArticleDto): Promise<ArticleEntity> {
    const newArticle = this.articleEntityRepository.create({ article });
    return await this.articleEntityRepository.save(newArticle);
  }

  async findAll(): Promise<ArticleEntity[]> {
    const findArticle = await this.articleEntityRepository.find();
    if (!findArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return findArticle;
  }

  async findOneById(id: string): Promise<ArticleEntity | null> {
    const findOneArticle = await this.articleEntityRepository.findOneBy({ id });
    if (!findOneArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return findOneArticle;
  }

  async findOne({ id }: FindOneArticleDto): Promise<ArticleEntity | null> {
    // проверить правильность поиска
    const findOneArticle = this.articleEntityRepository.findOne({
      where: { id },
    });
    if (!findOneArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return findOneArticle;
  }

  async update({
    id,
    article,
  }: UpdateArticleDto): Promise<ArticleEntity | undefined> {
    const findArticle = await this.articleEntityRepository.findOneBy({ id });

    if (!findArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }

    findArticle.article = article;

    const saveArticle = this.articleEntityRepository.save(findArticle);
    return saveArticle;
  }

  async delete({ id }: DeleteArticleDto): Promise<ArticleEntity | undefined> {
    const findArticle = await this.articleEntityRepository.findOneBy({ id });

    if (!findArticle) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }

    const deleteArticle = this.articleEntityRepository.remove(findArticle);
    return deleteArticle;
  }
}
