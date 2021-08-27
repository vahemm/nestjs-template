import { Body, Controller, Post } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}
  @Post('many')
  createMany(@Body() positionDto: CreatePositionDto[]) {
    return this.positionsService.createPositions(positionDto);
  }
}
