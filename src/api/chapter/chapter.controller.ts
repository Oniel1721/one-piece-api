import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateChapterDto } from './dto/create.chapter.dto'
import { FindChapterDto } from './dto/find.chapter.dto'
import { Chapter } from './chapter.entity'
import { ChapterRepository } from './chapter.repository'
import { ChapterService } from './chapter.service'

@Controller('chapter')
export class ChapterController extends CommonController<
    Chapter,
    ChapterRepository,
    ChapterService,
    FindChapterDto,
    CreateChapterDto
> {
  constructor (private readonly _chapterService: ChapterService) {
    super(_chapterService, FindChapterDto)
  }
}
