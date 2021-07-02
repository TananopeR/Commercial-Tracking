import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Advertisement {
  @Prop({ required: true })
  //user
  advertiserId: string;

  @Prop()
  ProductName: string;

  @Prop()
  //user
  InfuencerId: string;

  @Prop()
  link: string;

}

export type AdvertisementDocument = Advertisement & Document;
export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);