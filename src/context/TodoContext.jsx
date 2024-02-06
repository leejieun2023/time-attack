import { createContext } from "react";
import { useState, useEffect } from "react";
import { defaultTodos } from "../../static/todos";

export const TodoContext = createContext();

const TodoProvider = (props) => {
    const [todos, setTodos] = useState(defaultTodos);
    const [sortOrder, setSortOrder] = useState("asc");

    const onSubmitTodo = (nextTodo) => {
        setTodos((prevTodos) => [nextTodo, ...prevTodos]);
    };

    const onDeleteTodoItem = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onToggleTodoItem = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        }));
    };

    const onChangeSortOrder = (e) => {
        const nextSortOrder = e.target.value;
        setSortOrder(nextSortOrder);
    };

    useEffect(() => {
        const newTodos = [...todos];
        newTodos.sort((a, b) => {
            const newDate1 = new Date(a.limit);
            const newDate2 = new Date(b.limit);

            if (sortOrder === "asc") {
                return newDate1 - newDate2;
            } else {
                return newDate2 - newDate1;
            }
        });

        setTodos(newTodos);

    }, [sortOrder, todos]);

    return (
        <TodoProvider.provider value={{
            todos,
            setTodos,
            sortOrder,
            setSortOrder,
            onSubmitTodo,
            onDeleteTodoItem,
            onToggleTodoItem,
            onChangeSortOrder
        }}>
            {props.children}
        </TodoProvider.provider>
    );

};