"use client";

import { startTransition, useOptimistic } from "react";
import { Todo } from "@/generated/prisma/client";
import React from "react";
import { toggleTodo } from "../actions/todo-actions";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  //toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    }),
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));

      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-items-start items-center gap-4">
        <div
          onClick={onToggleTodo}
          className={`
        flex p-2 rounded-b-md cursor-pointer
        hover:bg-opacity-60
        ${todoOptimistic.complete ? " bg-blue-100" : " bg-gray-100"}
            `}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={20} className="text-green-600" />
          ) : (
            <IoCheckboxOutline size={20} className="text-gray-400" />
          )}

          <div className="text-center sm:text-left">
            {todoOptimistic.description}
          </div>
        </div>
      </div>
    </div>
  );
};
