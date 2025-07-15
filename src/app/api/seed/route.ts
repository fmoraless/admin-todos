import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true,
      },
      {
        description: "Piedra del poder",
      },
      {
        description: "Piedra del tiempo",
        complete: true,
      },
      {
        description: "Piedra de la realidad",
      },
      {
        description: "Piedra del espacio",
        complete: true,
      },
    ],
  });

  return NextResponse.json({
    message: "Seed endpoint",
  });
}
