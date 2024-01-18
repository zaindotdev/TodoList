import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid,
        text: action.payload,
        completed: false,
      };
      state.todo.push(todo);
    },

    removeTodo: (state, action) => {
      const index = state.todo.findIndex((prev) => prev.id === action.payload);
      if (index !== -1) state.todo.splice(index, 1);
    },
    updateTodo: (state, action) => {
      state.todo = state.todo.map((prev) =>
        prev.id === action.payload
          ? { ...prev, text: action.payload.text, completed: false }
          : prev
      );
    },
    isCompleted: (state, action) => {
      state.todo = state.todo.map((prev) =>
        prev.id === action.payload.id
          ? { ...prev, completed: !prev.completed }
          : prev
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, isCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
