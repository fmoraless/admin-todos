import { Todo } from "@/generated/prisma";
import React from "react";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-items-start items-center gap-4">
        <div
          className={`
        flex p-2 rounded-b-md cursor-pointer
        hover:bg-opacity-60
        ${todo.complete ? " bg-blue-100" : " bg-gray-100"}
            `}
        >
          {todo.complete ? (
            <IoCheckboxOutline size={20} className="text-green-600" />
          ) : (
            <IoCheckboxOutline size={20} className="text-gray-400" />
          )}

          <div className="text-center sm:text-left">{todo.description}</div>
        </div>
      </div>
    </div>
  );
};
