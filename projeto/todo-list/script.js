document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');

  function createTodoItem(taskText) {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      const todoText = document.createElement('span');
      todoText.classList.add('todo-text');
      todoText.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = '✖';

      li.appendChild(todoText);
      li.appendChild(deleteButton);

      todoText.addEventListener('click', () => {
          li.classList.toggle('completed');
      });

      deleteButton.addEventListener('click', () => {
          li.remove();
      });

      return li;
  }

  addButton.addEventListener('click', () => {
      const taskText = input.value.trim();
      if (taskText !== '') {
          const newItem = createTodoItem(taskText);
          todoList.appendChild(newItem);
          input.value = ''; 
      }
  });

  input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addButton.click();
      }
  });
});