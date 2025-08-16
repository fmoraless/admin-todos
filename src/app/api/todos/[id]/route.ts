import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Segments {
  params: {
    id: string;
  };
}
export async function GET(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id: ${id} no encontrado` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}
