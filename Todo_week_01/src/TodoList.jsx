import { TodoItem }  from "./TodoItem"

/* eslint-disable react/prop-types */
export function TodoList( { todos, toggleTodo, deleteTodo }) {
    return ( 
    <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
        return (
            <TodoItem 
                {...todo} 
                key={todo.id} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
            />
            //spread operator {...todo} does the same as the below portion
                /*id={todo.id} 
                completed={todo.completed} 
                title={todo.title} */
        )
        })}
    
  </ul>
    )
}