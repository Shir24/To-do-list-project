// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-task')) {
            deleteTask(e.target.parentElement);
        } else if (e.target.classList.contains('complete-task')) {
            toggleTaskCompletion(e.target.parentElement);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }

    function toggleTaskCompletion(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
