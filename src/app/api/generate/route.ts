import { connectToDb } from "@/lib/connectToDB";
import { generateReadme } from "@/lib/generateReadme";
import { Counter } from "@/models/count.model";
import { ICounter } from "@/types/models";
import { ProjectDetails } from "@/types/project";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectToDb();
        const project: ProjectDetails = await req.json();
        const text = await generateReadme(project);
        const counter: ICounter | null = await Counter.findOne();
        if(counter) {
            counter.generated += 1;
            await counter.save();
        }
        else {
            await Counter.create({ generated: 1 });
        }
        return NextResponse.json(text, { status: 200 });
    } catch (err) {
        console.error("Generate Readme Error:", (err as Error).message);
        return NextResponse.json({ message: "Failed to Generate Readme" }, { status: 500 });
    }
}