export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-button">
                <button onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.complete}>
                    <h6>✅ Mark as Done</h6>
                </button>
                <button onClick={() => handleDeleteTodo(todoIndex)}>
                    <h6>🗑️ Clear This</h6>
                </button>
            </div>
        </div>
    )
}