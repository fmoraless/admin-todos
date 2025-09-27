import { Todo } from "@/generated/prisma";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  // Implementation for updating a todo
  const body = { complete };

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log({ todo });

  return todo;
};
