import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { mysqlPool } from "@/utils/db";

interface Attraction {
    id: number;
    name: string;
    description: string;
    location: string;
}

export async function GET(
    request: NextRequest,
    context: Promise<{ params: { id: string } }> // ใช้ Promise ครอบ params
): Promise<NextResponse> {
    try {
        // ต้องใช้ await กับ context
        const { params } = await context;
        const { id } = params;

        // ตรวจสอบ ID
        if (!id || isNaN(Number(id))) {
            return NextResponse.json(
                { error: "Invalid attraction ID" },
                { status: 400 }
            );
        }

        const promisePool = mysqlPool.promise();
        const [rows]: [Attraction[], any] = await promisePool.query(
            `SELECT id, name, description, location FROM attractions WHERE id = ?`,
            [id]
        );

        if (!rows || rows.length === 0) {
            return NextResponse.json(
                { error: "Attraction not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(rows[0]);

    } catch (error) {
        console.error("Database query error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}