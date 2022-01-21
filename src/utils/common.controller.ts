import { ClassConstructor, plainToInstance } from 'class-transformer'
import { CommonService } from './common.service'
import {
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Body,
  Post,
  UseGuards,
  Req
} from '@nestjs/common'
import { BaseEntity, UpdateResult, Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { JwtAuthGuard } from '../api/auth/jwt.guard'
import { ApiResponse } from '@nestjs/swagger'
import { UpdateCommonDto } from './common.update.dto'
import { Request } from 'express'

export class CommonController<
  Entity extends BaseEntity,
  Repo extends Repository<Entity>,
  Service extends CommonService<Entity, Repo>,
  FindDto,
  CreateDto
> {
  constructor (
      private readonly _commonService: Service,
      private readonly _findDto: ClassConstructor<FindDto>
  ) {}

  @Get()
  async findAll (): Promise<FindDto[]> {
    return await this._commonService.findAll(this._findDto)
  }

  @Get('/schema')
  async findSchema (@Req() req: Request) {
    return this._commonService.findSchema(req.path)
  }

  @Get(':id')
  async get (@Param('id', ParseIntPipe) id: number): Promise<FindDto> {
    return await this._commonService.findById(id, this._findDto)
  }

  @ApiResponse({
    status: 201
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create (@Body() body: CreateDto):Promise<FindDto> {
    const created = await this._commonService.create(body, this._findDto)
    return created
  }

  @ApiResponse({
    type: UpdateCommonDto,
    status: 200
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update (
    @Param('id', ParseIntPipe) id: number,
    @Body() body: QueryDeepPartialEntity<Entity>
  ): Promise<UpdateCommonDto> {
    const updated: UpdateResult = await this._commonService.update(id, body)
    return plainToInstance(UpdateCommonDto, updated)
  }
}
