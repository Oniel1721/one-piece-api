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
  Res
} from '@nestjs/common'
import { BaseEntity, UpdateResult, Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { JwtAuthGuard } from '../api/auth/jwt.guard'
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger'
import { UpdateCommonDto } from './common.update.dto'
import { Response } from 'express'
import { BearerAuth } from '../types/const.bearer.auth'

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

  @Get(':id')
  async get (@Param('id', ParseIntPipe) id: number): Promise<FindDto> {
    return await this._commonService.findById(id, this._findDto)
  }

  @ApiResponse({
    status: 201
  })
  @ApiBearerAuth(BearerAuth)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create (@Body() body: CreateDto, @Res() res: Response):Promise<FindDto> {
    res.status(201)
    return await this._commonService.create(body, this._findDto)
  }

  @ApiResponse({
    type: UpdateCommonDto,
    status: 200
  })
  @ApiBearerAuth(BearerAuth)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update (
    @Param('id', ParseIntPipe) id: number,
    @Body() body: QueryDeepPartialEntity<Entity>,
    @Res() res: Response
  ): Promise<UpdateCommonDto> {
    const updated: UpdateResult = await this._commonService.update(id, body)
    res.status(200)
    return plainToInstance(UpdateCommonDto, updated)
  }
}
