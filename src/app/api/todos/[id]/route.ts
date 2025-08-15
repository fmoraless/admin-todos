import { NextResponse } from "next/server";

export async function GET(request: Request, segmetns: any) {
  return NextResponse.json({ segmetns });
}
