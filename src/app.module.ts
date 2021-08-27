import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'node:tls';
import * as dbConfig from './configs/db';
import { RootModule } from './root/root.module';
import { UsersModule } from './users/users.module';
import { PlayersModule } from './players/players.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [
    RootModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({ ...dbConfig } as ConnectionOptions),
    PlayersModule,
    PositionsModule,
  ],
})
export class AppModule {}
