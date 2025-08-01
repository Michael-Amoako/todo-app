const SPECIAL_TASK = "🌱 Add one task. Make today count.";
const INPROGRESS_MSG = "🛠 What’s your next move? Let’s do it.";

export function Header(props) {
    const { todos } = props;
    // Filter out special messages for counts
    const filteredTodos = todos.filter(
        todo =>
            todo.input !== SPECIAL_TASK &&
            todo.input !== INPROGRESS_MSG
    );
    const openTodos = filteredTodos.filter(todo => !todo.complete);
    const openTodosLength = openTodos.length;

    // Dynamic pluralization
    const taskWord = openTodosLength === 1 ? "Task" : "Tasks";
    const winWord = openTodosLength === 1 ? "Win" : "Wins";
    const waitingWord = openTodosLength === 1 ? "Waiting" : "Waiting";

    return (
        <header>
            <h1 className="text-gradient">
                🧩 {openTodosLength} {taskWord}, {openTodosLength} {winWord}{" "}
                {waitingWord}
            </h1>
        </header>
    );
}