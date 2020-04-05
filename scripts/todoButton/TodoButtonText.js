const contentTarget = document.querySelector(".addTodo_item")
const eventHub = document.querySelector(".container")

export const TodoListInput = () => {
    contentTarget.innerHTML = `<div>
        <span><button id='addTodoButton'>Add todo list</button></span>
        <input type = 'text' placeholder = 'add todo list here' class = 'user__input'>
    </div>`
}

contentTarget.addEventListener("keyup", e=>{
    if(e.keyCode === 13){
        const userInput = new CustomEvent("userInput", {
            detail: {
                userInputValue: document.querySelector(".user__input").value
            }
        })
        eventHub.dispatchEvent(userInput)
    }
})