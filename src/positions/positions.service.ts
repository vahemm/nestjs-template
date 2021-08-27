import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionRepository } from './positions.repository';
import { CreatePositionDto } from './dto/create-position.dto';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(PositionRepository)
    private positionsRepository: PositionRepository,
  ) {}
  async createPositions(positionDto: CreatePositionDto[]) {
    console.log('test');

    await this.positionsRepository.createManyPositions(positionDto);
  }
}
