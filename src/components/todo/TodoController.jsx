import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoController = () => {
  
  const {todos, sortOrder, onSubmitTodo, onDeleteTodoItem, onToggleTodoItem, onChangeSortOrder} = useContext(TodoContext);

  const workingTodos = todos.filter((todo) => !todo.completed);
  const doneTodos = todos.filter((todo) => todo.completed);

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <div>
        <select onChange={onChangeSortOrder} value={sortOrder}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
      <TodoList
        headTitle="Working!"
        todos={workingTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      <TodoList
        headTitle="Done!"
        todos={doneTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
    </main>
  );
};

export default TodoController;
