import {useState} from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    return (
        <div className="input-container">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue.trim() !== '') {
                        handleAddTodo(inputValue);
                        setInputValue('');
                    }
                }}
                placeholder="Add a task to start momentum"
            />
            <button onClick={() => {
    if (!inputValue) { return }
    handleAddTodo(inputValue)
    setInputValue('')
}}>
    ➕ Add Focus
</button>
        </div>
    )
}
