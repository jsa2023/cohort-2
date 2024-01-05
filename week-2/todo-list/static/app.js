const todoList = document.querySelectorAll('.todo')
//console.log(todoList)
for (const item of todoList) {
    //console.log(item)
    item.addEventListener('click', () => {
        item.style.textDecoration="line-through";
    })
}

function downloadTodoList() {
    let todoText = "";
    for (const todo of todoList) {
        todoText += todo.innerText + "\n";
    }

    const blob = new Blob([todoText], { type: "text/plain" });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "todo-list.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}