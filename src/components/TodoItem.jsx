/* eslint-disable no-unused-vars */
import {
  removeTodo,
  updateTodo,
  isCompleted,
} from "../features/todoSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function TodoItem() {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);
  const [todoMsg, setTodoMsg] = useState(todo.text);

  return (
    <>
      {todo.map((todoItem) => (
        <div
          key={todoItem.id}
          className="bg-green-300 p-5 mt-10 rounded-md shadow-lg flex items-center justify-between"
        >
          <input
            type="checkbox"
            className="cursor-pointer mr-2"
            onChange={() => dispatch(isCompleted(todoItem.id))}
          />
          <input
            className={`bg-inherit font-bold text-lg  outline-none ${
              todoItem.completed ? "line-through" : ""
            } ${isTodoEditable ? "border-black-2" : "border-transparent"}`}
            value={todoItem.text}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
          <section className="flex items-center justify-center gap-2">
            <button
              onClick={() => {
                if (todoItem.completed) return;
                if (isTodoEditable) {
                  dispatch(updateTodo(todoItem.id));
                  setIsTodoEditable(false);
                } else {
                  setIsTodoEditable((prev) => !prev);
                }
              }}
              disabled={todoItem.completed}
              className="flex items-center justify-center px-3 py-1 bg-blue-400 rounded-md shadow-md"
            >
              {isTodoEditable ? (
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                    fill="#0F0F0F"
                  />
                </svg>
              ) : (
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 3H7C5.89543 3 5 3.89543 5 5V10M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19M19 9V19C19 20.1046 18.1046 21 17 21H10C7.79086 21 6 19.2091 6 17V17C6 14.7909 7.79086 13 10 13H13M13 13L10 10M13 13L10 16"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => dispatch(removeTodo(todoItem.id))}
              className="flex items-center justify-center px-3 py-1 bg-red-400 focus:outline-none active:scale-95 rounded-md shadow-md"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11V17"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </section>
        </div>
      ))}
    </>
  );
}

export default TodoItem;
