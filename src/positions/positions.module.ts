import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionsController } from './positions.controller';
import { PositionRepository } from './positions.repository';
import { PositionsService } from './positions.service';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService],
  imports: [TypeOrmModule.forFeature([PositionRepository])],
})
export class PositionsModule {}
