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
            const taskNumber = taskList.children.length + 1;
            listItem.textContent = `${taskNumber}. ${taskText}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-task-button';
            removeButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
                updateTaskNumbers();
            });

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
            taskInput.focus();
        }
    }

    function updateTaskNumbers() {
        Array.from(taskList.children).forEach((listItem, index) => {
            const text = listItem.textContent.split('.')[1].split('Remove')[0].trim();
            listItem.firstChild.textContent = `${index + 1}. ${text}`;
        });
    }
});