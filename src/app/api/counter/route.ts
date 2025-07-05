import { connectToDb } from "@/lib/connectToDB";
import { Counter } from "@/models/count.model";
import { ICounter } from "@/types/models";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDb();
        const counter: ICounter | null = await Counter.findOne();
        if(counter) {
            return NextResponse.json(counter.generated, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "Not Generated Yet!" }, { status: 200 });
        }
    } catch (err) {
        console.error("Generated Readme Counter Error:", (err as Error).message);
        return NextResponse.json({ message: "Failed to Generate Readme" }, { status: 500 });
    }
}