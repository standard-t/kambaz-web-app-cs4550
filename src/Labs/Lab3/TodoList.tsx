
import todos from "./todos.json";
export default function TodoList() {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map(todo => {
                    return (<li className="list-group-item">
                        <input type="checkbox" className="me-2"
                            defaultChecked={todo.done} />
                        {todo.title} ({todo.status})
                    </li>);
                })}
            </ul><hr />
        </>
    );
}
