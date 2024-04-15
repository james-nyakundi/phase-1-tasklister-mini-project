document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById('taskInput');
const submitButton = document.getElementById('submitTask');
const taskList = document.getElementById('taskList');

submitButton.addEventListener('click', function() {
    const task = taskInput.value;
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    taskInput.value = '';
});
});
