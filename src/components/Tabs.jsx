export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props

    // Use new tab names
    const tabs = ['📋 All Tasks', '🔓 In Progress', '✅ Done']

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                // Map tab names to logic
                let numOfTasks = 0
                if (tab === '📋 All Tasks') numOfTasks = todos.length
                else if (tab === '🔓 In Progress') numOfTasks = todos.filter(val => !val.complete).length
                else if (tab === '✅ Done') numOfTasks = todos.filter(val => val.complete).length

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