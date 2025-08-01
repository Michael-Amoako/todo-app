import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props

    const filterTodosList =
        selectedTab === '📋 All Tasks'
            ? todos
            : selectedTab === '✅ Done'
                ? todos.filter(val => val.complete)
                : todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo) => {
                // Find the original index in the todos array
                const originalIndex = todos.indexOf(todo);
                return (
                    <TodoCard
                        key={originalIndex}
                        todoIndex={originalIndex}
                        {...props}
                        todo={todo}
                    />
                )
            })}
        </>
    )
}