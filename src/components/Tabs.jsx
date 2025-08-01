const SPECIAL_TASK = "🌱 Add one task. Make today count.";
const INPROGRESS_MSG = "🛠 What’s your next move? Let’s do it.";

export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props

    // Filter out special messages for counts
    const filteredTodos = todos.filter(
        todo =>
            todo.input !== SPECIAL_TASK &&
            todo.input !== INPROGRESS_MSG
    );

    const tabs = ['📋 All Tasks', '🔓 In Progress', '✅ Done']

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                let numOfTasks = 0
                if (tab === '📋 All Tasks') numOfTasks = filteredTodos.length
                else if (tab === '🔓 In Progress') numOfTasks = filteredTodos.filter(val => !val.complete).length
                else if (tab === '✅ Done') numOfTasks = filteredTodos.filter(val => val.complete).length

                return (
                    <button onClick={() => setSelectedTab(tab)}
                        key={tabIndex}
                        className={"tab-button " + (tab === selectedTab ? 'tab-selected' : '')}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}