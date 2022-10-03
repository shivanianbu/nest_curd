import { Schema , Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument= User & Document

@Schema()
export class User {

    @Prop()
    firstName : string;

    @Prop()
    lastName : string;

    @Prop()
    gender : string;

    @Prop({default : Date.now})
    created_on : Date
}

export const UserSchema = SchemaFactory.createForClass(User)