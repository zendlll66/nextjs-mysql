import { NextRequest, NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET(request: NextRequest, context: any) {
  const { params } = await context;
  const id = params.id;

  const promisePool = mysqlPool.promise();
  const [rows] = await promisePool.query(
    `SELECT * FROM attractions WHERE id = ?`,
    [id]
  );

  return NextResponse.json(rows);
}
