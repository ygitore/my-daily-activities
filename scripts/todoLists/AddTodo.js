export const AddTodo = (userInput) => {
    return `
            <div class = "individual_todo_list">
                <div>${userInput}</div>
                <button id = "delete_todo_list">delete</button>
            </div>
            `
}
