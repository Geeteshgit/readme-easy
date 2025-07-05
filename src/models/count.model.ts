import { ICounter } from "@/types/models";
import mongoose, { model, Schema } from "mongoose";

const counterSchema = new Schema<ICounter>({
    generated: {
        type: Number,
        default: 0,
    }
});

export const Counter = mongoose.models.Counter || model<ICounter>("Counter", counterSchema);