import TodoItem from "./TodoItem";

const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section>
      <h2>{headTitle}</h2>
      <ul>
        {
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodoItem={onDeleteTodoItem}
              onToggleTodoItem={onToggleTodoItem}
            />
          ))

        }
      </ul>
    </section>
  );
};

export default TodoList;