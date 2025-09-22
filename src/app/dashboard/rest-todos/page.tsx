import prisma from "@/lib/prisma";
import React from "react";

export const metadata = {
  title: "Listado Rest Todos",
  description: "Listado de tareas con Rest API",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <>
      <span className="text-2xl font-bold">Rest todos</span>
      {JSON.stringify(todos, null, 2)}
    </>
  );
}
