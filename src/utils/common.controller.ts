import { ClassConstructor } from 'class-transformer'
import { CommonService } from './common.service'
import {
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Body,
  Post
} from '@nestjs/common'
import { BaseEntity, UpdateResult, Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

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

  @Post()
  async create (@Body() body: CreateDto):Promise<FindDto> {
    return await this._commonService.create(body, this._findDto)
  }

  @Patch(':id')
  async update (
    @Param('id', ParseIntPipe) id: number,
    @Body() body: QueryDeepPartialEntity<Entity>
  ): Promise<UpdateResult> {
    const updated: UpdateResult = await this._commonService.update(id, body)
    return updated
  }
}
