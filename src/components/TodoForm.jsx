import { addTodo } from "../features/todoSlice";
import  { useState } from "react";
import { useDispatch } from "react-redux";
function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    else {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center flex-col gap-4"
      >
        <input
          placeholder="Enter Todo"
          className="w-96 text-xl border-none shadow-2xl rounded-md border-2 border-gray-500 px-2 py-3"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 tracking-widest text-lg text-white font-bold px-5 py-3 rounded-md hover:bg-blue-700 active:tracking-tight"
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export default TodoForm;
