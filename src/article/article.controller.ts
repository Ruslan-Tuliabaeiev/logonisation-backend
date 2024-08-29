import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {ArticleService} from "./article.service";
import {CreateArticleDto} from "./dtos/create-article.dto";
import {ArticleEntity} from "./entity/article.entity";
import {UpdateArticleDto} from "./dtos/update-article.dto";
import {DeleteArticleDto} from "./dtos/delete-article.dto";
import {FindOneArticleDto} from "./dtos/find-one-article.dto";

@ApiTags(`/article`)
@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService ,
    ) {
    }

    @Post()
    @ApiOperation({
        summary: 'Creates article.',
    })
    @ApiResponse({
        status: 201,
        description: 'Article successfully created.',
        type: ArticleEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Article not created.',
    })
    async create(@Body() createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
        return await this.articleService.create(createArticleDto)
    }

    @Get('/all')
    @ApiOperation({
        summary: 'Get all articles data.',
    })
    @ApiResponse({
        status: 201,
        description: 'Get all articles data successfully retrieved.',
        type: ArticleEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Could not find article.',
    })
    async findAll(): Promise<ArticleEntity[]> {
        return await this.articleService.findAll()
    }

    @Get('/one/:id')
    @ApiOperation({
        summary: 'Find articles data.',
    })
    @ApiResponse({
        status: 201,
        description: 'Find articles data successfully retrieved.',
        type: ArticleEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Could not find article.',
    })

    async findOneById(@Param('id') id: string): Promise<ArticleEntity> {
        return await this.articleService.findOneById(id)
    }

    @Get()
    @ApiOperation({
        summary: 'Find articles data.',
    })
    @ApiResponse({
        status: 201,
        description: 'Find articles data successfully retrieved.',
        type: ArticleEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Could not find article.',
    })
    async findOne(@Body() findOneArticleDto: FindOneArticleDto): Promise<ArticleEntity> {
        return await this.articleService.findOne(findOneArticleDto)
    }

    @Put()
    @ApiOperation({
        summary: 'Update articles data.',
    })
    @ApiResponse({
        status: 201,
        description: 'Update articles data successfully retrieved.',
        type: ArticleEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Could not update article.',
    })
    async update(@Body() updateArticleDto: UpdateArticleDto): Promise<ArticleEntity> {
        return await this.articleService.update( updateArticleDto)
    }

    @Delete()
    @ApiOperation({
        summary: 'Delete articles data.',
    })
    @ApiResponse({
        status: 201,
        description: 'Delete articles data successfully retrieved.',
        type: ArticleEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Could not delete article.',
    })
    async delete(@Body() deleteArticleDto: DeleteArticleDto): Promise<ArticleEntity> {
        return await this.articleService.delete(deleteArticleDto)
    }
}
