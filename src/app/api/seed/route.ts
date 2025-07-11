import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const todo = await prisma.todo.create({
    data: {
      description: "Seeded Todo",
    },
  });

  console.log("Seeded Todo:", todo);

  return NextResponse.json({
    message: "Seed endpoint",
  });
}
