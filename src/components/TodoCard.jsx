export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, isSpecial } = props;

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            {/* Hide buttons for special messages */}
            {!isSpecial && (
                <div className="todo-button">
                    <button onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.complete}>
                        <h6>✅ Mark as Done</h6>
                    </button>
                    <button onClick={() => handleDeleteTodo(todoIndex)}>
                        <h6>🗑️ Clear This</h6>
                    </button>
                </div>
            )}
        </div>
    );
}