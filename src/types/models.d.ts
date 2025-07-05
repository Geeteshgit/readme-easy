import { Document } from "mongoose";

export interface ICounter extends Document {
  generated: number;
}
