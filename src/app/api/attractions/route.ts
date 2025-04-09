import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db"; // ปรับตาม path จริง


interface Attraction {
  id: number;
  name: string;
  description: string;
  location: string;
  // Add other fields as per the database schema
}

export async function GET(request: Request): Promise<NextResponse> {
  const promisePool = mysqlPool.promise();
  const [rows, fields]: [Attraction[], any] = await promisePool.query(
    `SELECT * FROM attractions;`
  );
  return NextResponse.json(rows);
}