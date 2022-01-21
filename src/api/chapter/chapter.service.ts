import { Chapter } from './chapter.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { ChapterRepository } from './chapter.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ChapterService extends CommonService<Chapter, ChapterRepository> {
  constructor (
    @InjectRepository(ChapterRepository)
    private readonly _chapterRepository: ChapterRepository
  ) {
    super(_chapterRepository)
  }
}
