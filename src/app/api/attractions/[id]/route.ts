import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

interface Attraction {
    id: number;
    name: string;
    description: string;
    location: string;
    // Add other fields as per your database schema
}

interface Params {
    id: string;
}

export async function GET(
    request: Request,
    { params }: { params: Params }
): Promise<NextResponse> {
    const { id } = params;  // No need to await here, just directly access the params
    const promisePool = mysqlPool.promise();
    const [rows, fields]: [Attraction[], any] = await promisePool.query(
        `SELECT * FROM attractions WHERE id = ?`,
        [id]
    );
    return NextResponse.json(rows);
}
