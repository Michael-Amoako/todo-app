import { TodoCard } from "./TodoCard";

const SPECIAL_TASK = "🌱 Add one task. Make today count.";
const INPROGRESS_MSG = "🛠 What’s your next move? Let’s do it.";

export function TodoList(props) {
    const { todos, selectedTab, handleCompleteTodo, handleDeleteTodo } = props;

    // Filter out special messages for logic and counts
    const filteredTodos = todos.filter(
        todo =>
            todo.input !== SPECIAL_TASK &&
            todo.input !== INPROGRESS_MSG
    );

    const openTodos = filteredTodos.filter(todo => !todo.complete);
    const completedTodos = filteredTodos.filter(todo => todo.complete);

    let filterTodosList = [];
    if (selectedTab === '📋 All Tasks') {
        filterTodosList = filteredTodos;
    } else if (selectedTab === '✅ Done') {
        filterTodosList = completedTodos;
    } else {
        filterTodosList = openTodos;
    }

    // Dynamic completed tab message
    let completedMessage = "";
    if (selectedTab === '✅ Done') {
        if (completedTodos.length === 0) {
            completedMessage = "🎉 Nothing here yet. Time to earn it.";
        } else if (completedTodos.length > 0 && completedTodos.length < filteredTodos.length) {
            completedMessage = "🔥 You're on a roll—what's your next win?";
        } else if (filteredTodos.length > 0) {
            completedMessage = "🏆 All done. Victory secured.";
        }
    }

    return (
        <>
            {/* All Tasks: always show special task at top */}
            {selectedTab === '📋 All Tasks' && (
                <TodoCard
                    todo={{ input: SPECIAL_TASK, complete: false }}
                    isSpecial={true}
                />
            )}

            {/* In Progress: always show in-progress message at top */}
            {selectedTab === '🔓 In Progress' && (
                <TodoCard
                    todo={{ input: INPROGRESS_MSG, complete: false }}
                    isSpecial={true}
                />
            )}

            {/* Completed: always show dynamic message at top */}
            {selectedTab === '✅ Done' && (
                <TodoCard
                    todo={{ input: completedMessage, complete: false }}
                    isSpecial={true}
                />
            )}

            {/* Render todos (never counting special messages) */}
            {filterTodosList.map((todo) => {
                const originalIndex = todos.indexOf(todo);
                return (
                    <TodoCard
                        key={originalIndex}
                        todoIndex={originalIndex}
                        todo={todo}
                        handleCompleteTodo={handleCompleteTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        isSpecial={false}
                    />
                );
            })}
        </>
    );
}