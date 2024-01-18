import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/todoForm";
function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-gray-400 flex items-center justify-start pt-10 flex-col">
        <TodoForm/>
        <TodoItem/>
      </div>
    </Provider>
  );
}

export default App;
