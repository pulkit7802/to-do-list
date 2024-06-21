
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}


function completeTask(button) {
    const li = button.closest('li');
    li.classList.toggle('complete');
}


function deleteTask(button) {
    const li = button.closest('li');
    li.remove();
}
