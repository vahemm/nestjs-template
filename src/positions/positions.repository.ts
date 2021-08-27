import { EntityRepository, Repository } from 'typeorm';
import { Position } from './positions.entity';

@EntityRepository(Position)
export class PositionRepository extends Repository<Position> {
  async createManyPositions(positionsDto) {
    await this.createQueryBuilder()
      .insert()
      .into(Position)
      .values(positionsDto)
      .execute();
  }
}
