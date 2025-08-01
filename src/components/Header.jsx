export function Header(props) {
    const { todos } = props
    const openTodos = todos.filter(todo => !todo.complete)
    const openTodosLength = openTodos.length
    const completedTodosLength = todos.filter(todo => todo.complete).length

    return (
        <header>
            <h1 className="text-gradient">
                🧩 {openTodosLength} Tasks, {openTodosLength} Wins Waitings
            </h1>
        </header>
    )
}