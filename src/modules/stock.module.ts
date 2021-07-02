import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StockSchema, Stock } from '../schemas';
import { StockController,FacebookController } from '../controllers';
import { StockService } from '../services';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import {FacebookStrategy} from './facebook.strategy';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }]),
  ],
  controllers: [StockController,FacebookController],
  providers: [StockService,FacebookStrategy],
})
export class StockModule {}
