document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');

            const completeButton = document.createElement('button');
            completeButton.className = 'complete-task-button';
            completeButton.innerHTML = '&#10003;'; // Tick mark
            completeButton.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            const taskTextNode = document.createElement('span');
            taskTextNode.className = 'task-text';
            taskTextNode.textContent = taskText;

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-task-button';
            removeButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(completeButton);
            listItem.appendChild(taskTextNode);
            buttonContainer.appendChild(removeButton);
            listItem.appendChild(buttonContainer);
            taskList.appendChild(listItem);
            taskInput.value = '';
            taskInput.focus();
        }
    }
});