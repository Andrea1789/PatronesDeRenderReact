import React from "react";
import { TodoContext } from "../TodoContext/Index";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoSearch } from "../TodoSearch/Index";
import { TodoList } from "../TodoList/Index";
import { TodoItem } from "../TodoItem/Index";
import { CreateTodoButton } from "../CreateTodoButton/Index";
import { Modal } from "../Modal/index";
import { TodoForm } from "../TodoForm/Index";

function AppUI() {
const {
error,
loading,
searchedTodos,
completeTodo,
deleteTodo,
openModal,
setOpenModal,
} = React.useContext(TodoContext);
return (
<React.Fragment>
    <TodoCounter />

    <TodoSearch />

    <TodoList>
    {error && <p>Desespérate, hubo un error..</p>}
    {loading && <p>Estamos cragando, no desesperes...</p>}
    {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

    {searchedTodos.map((todo) => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
    ))}
    </TodoList>

    {!!openModal && (
    <Modal>
        <TodoForm />
    </Modal>
    )}

    <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
