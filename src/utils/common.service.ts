import {
  BadRequestException,
  NotFoundException
} from '@nestjs/common'
import {
  UpdateResult,
  Repository,
  BaseEntity
} from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { ClassConstructor, plainToInstance } from 'class-transformer'
import { schemas } from './const.schemas'

export class CommonService<Entity extends BaseEntity, Repo extends Repository<Entity>> {
  public readonly entityName: string;
  constructor (private readonly _commonRepository: Repo) {
    this.entityName = this._commonRepository.metadata.name
  }

  private filterSchema (name: string) {
    const schemaName = `find${name}dto`
    for (const prop in schemas) {
      const currentSchemaName = prop.toLowerCase()
      if (schemaName === currentSchemaName) {
        const schema = schemas[prop]
        const result = schema.properties
        for (const resultProp in result) {
          if (schema.required.includes(resultProp)) {
            result[resultProp].required = true
          } else {
            result[resultProp].required = false
          }
        }
        result.id = undefined
        result.createdAt = undefined
        result.updatedAt = undefined
        return result
      }
    }
    return null
  }

  findSchema (path: string) {
    const name = path.split('/')[2].toLowerCase()
    return this.filterSchema(name)
  }

  async findAll<FindDto> (
    transformTo: ClassConstructor<FindDto>
  ): Promise<FindDto[]> {
    const entities = await this._commonRepository.find()
    if (!entities.length) {
      throw new NotFoundException(`there are not ${this.entityName}s matching with the query.`)
    }
    const planed = plainToInstance(transformTo, entities)
    return planed
  }

  async findById<FindDto> (id: number, transformTo: ClassConstructor<FindDto>): Promise<FindDto> {
    if (typeof id !== 'number') {
      throw new BadRequestException()
    }

    const entity: Entity = await this._commonRepository.findOne(id, {
      loadEagerRelations: true
    })
    if (!entity) {
      throw new NotFoundException(
        `there is not ${this.entityName} matching with the given id.`
      )
    }
    const planed = plainToInstance(transformTo, entity)
    return planed
  }

  async create<CreateDto, FindDto> (body: CreateDto, transformTo: ClassConstructor<FindDto>): Promise<FindDto> {
    const entity = await this._commonRepository.save(body)
    const planed = plainToInstance(transformTo, entity)
    return planed
  }

  async update (
    id: number,
    newValues: QueryDeepPartialEntity<Entity>
  ): Promise<UpdateResult> {
    if (typeof id !== 'number') {
      throw new BadRequestException()
    }
    const exist = await this._commonRepository.findOne(id)
    if (!exist) {
      throw new NotFoundException(
        `there is not ${this.entityName} matching with given the id.`
      )
    }
    const updated: UpdateResult = await this._commonRepository.update(
      id,
      newValues
    )
    return updated
  }
}
