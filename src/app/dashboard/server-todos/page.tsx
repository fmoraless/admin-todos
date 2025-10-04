import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";
import React from "react";

export const metadata = {
  title: "Listado Rest Todos",
  description: "Listado de tareas con Rest API",
};

export default async function ServerTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <>
      <span className="text-3xl mb-10"> Server actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
