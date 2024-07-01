document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-lists');
    const newTaskInput = document.getElementById('new-task');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = newTaskInput.value;

        if (taskText === '') return;

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));

        const removeButton = document.createElement('button');
        removeButton.appendChild(document.createTextNode('Remove'));
        li.appendChild(removeButton);

        taskList.appendChild(li);

        newTaskInput.value = '';
    }

    function removeTask(e) {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});