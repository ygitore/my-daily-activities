import { AddTodo } from "./AddTodo.js";
import { todoListInput } from "../todoButton/todoButtonText.js";

const contentTarget = document.querySelector(".todoListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userinput", customEvent=>{
    const userInput = customEvent.detail.userInputValue
    contentTarget.innerHTML = AddTodo(userInput)
})

contentTarget.addEventListener("click", e=>{
    if(e.target.id = "delete_todo_list"){
        const deleteButton = document.querySelector("#delete_todo_list")
        deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode)
    }
})