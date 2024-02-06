import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";
import TodoProvider from "./context/TodoContext";

const App = () => {
  return (
    <>
      <TodoProvider>
        <Header />
        <TodoController />
      </TodoProvider>
    </>
  );
};

export default App;
