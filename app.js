// Variables
const form = document.querySelector('#task-form');
const ul = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// Load Event Listners
loadEventListners();

// Create loadEventListners()
function loadEventListners() {
  // Load addTask()
  form.addEventListener('submit', addTask);
  // Load removeTask()
  ul.addEventListener('click', removeTask);
  // Load clearTasks()
  clearBtn.addEventListener('click', clearTasks);
  // load filterTasks()
  filter.addEventListener('keypress', filterTasks);
  document.addEventListener('DOMContentLoaded', grabFromLS);
};

// Add a task
function addTask(e) {
  if(taskInput.value !== null){
    // Create and list item
  li = document.createElement('li');
  // Creat a link ( X mark )
  a = document.createElement('a');

  // Give the list item a class name
  li.className = 'collection-item';

  // Add text to the list item
  li.textContent = taskInput.value;

  // Give the link a class
  a.className = 'delete-item secondary-content';

  // Make the X mark in the a
  a.innerHTML = '<i class="fa fa-remove" />';

  // Append the a the list item
  li.appendChild(a);

  // Append the list item to the ul
  ul.appendChild(li);

  // Clear the input field
  
  } else{
    alert('Please Add A Task');
  };

  // Add to local storage

  const task = taskInput.value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // console.log(task);

  taskInput.value = '';
  e.preventDefault();
};

// Delete a task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  };
  e.preventDefault();
};

// Clear all tasks
function clearTasks(e) {
  allTasks = document.querySelectorAll('li');
  allTasks.forEach(function(task){
    task.remove();
  });
  // console.log('Tasks Removed')
};

// Filter through tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection').forEach(function(task, index){
    
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) !== -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    };
  });
  console.log(text);
};

function grabFromLS(e) {
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(function(task) {
  li = document.createElement('li');
  // Creat a link ( X mark )
  a = document.createElement('a');

  // Give the list item a class name
  li.className = 'collection-item';

  // Add text to the list item
  li.textContent = task;

  // Give the link a class
  a.className = 'delete-item secondary-content';

  // Make the X mark in the a
  a.innerHTML = '<i class="fa fa-remove" />';

  // Append the a the list item
  li.appendChild(a);

  // Append the list item to the ul
  ul.appendChild(li);
});
  // console.log(tasks);
}