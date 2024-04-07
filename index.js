const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    //Generating the HTML for each todo item
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];
        const html = `
            <p>
                ${todo} 
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button> 
            </p>
        `;
        todoListHTML += html;
        console.log(todoListHTML);
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    //Storing the input value inside a variable
    const inputEle = document.querySelector('.js-name-input')
    const name = inputEle.value;

    //Adding the input value to a list
    todoList.push(name);
    console.log(todoList);

    //Clearing the input value
    inputEle.value = '';

    //Calling the render func
    renderTodoList();
}

