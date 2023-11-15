const todoList = [{
  name: 'make dinner',
  dueDate: '2023-11-15'
}, {
  name: 'wash dishes',
  dueDate: '2023-11-15'
}, {
  name: 'watch YT',
  dueDate: '2023-11-15'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate} = todoObject; // this is called destructuring

    const html = `
      <p>
      ${name} ${dueDate}  
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
      </p>
    `;

    todoListHTML += html;
  } 
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const dateInputElement = document.querySelector('.js-dueDate-input');


  // inputElement.value(to je bilo koja vrijednost koja se nalazi u textbox-u) i možemo value spremiti u varijablu:

  const name = inputElement.value;
  console.log(name);

  const dueDate = dateInputElement.value;


  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';

  renderTodoList();
}
