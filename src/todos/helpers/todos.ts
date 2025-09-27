import { Todo } from "@/generated/prisma";

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  //await sleep(2);

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

export const createTodo = async (description: string): Promise<Todo> => {
  // Implementation for updating a todo
  const body = { description };

  const todo = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log({ todo });

  return todo;
};

export const deleteCompletedTodos = async (): Promise<boolean> => {
  // Implementation for updating a todo

  await fetch("/api/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return true;
};
