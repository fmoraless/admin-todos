import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import React from "react";

export const metadata = {
  title: "Listado Rest Todos",
  description: "Listado de tareas con Rest API",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
