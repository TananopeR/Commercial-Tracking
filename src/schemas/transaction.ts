import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction {
  @Prop({ required: true })
  //user
  userId: string;

  @Prop()
  openTime: string;

  @Prop()
  //advertisment
  advertisementId: string;

}

export type TransactionDocument = Transaction & Document;
export const TransactionSchema = SchemaFactory.createForClass(Transaction);