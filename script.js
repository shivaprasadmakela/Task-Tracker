// State management: tasks array is the single source of truth
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const pendingTasksContainer = document.getElementById('pending-tasks');
const completedTasksContainer = document.getElementById('completed-tasks');
const pendingCountEl = document.getElementById('pending-count');
const completedCountEl = document.getElementById('completed-count');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

// Core Rendering Logic
function renderTasks() {
    // Clear containers
    pendingTasksContainer.innerHTML = '';
    completedTasksContainer.innerHTML = '';

    // Sort tasks: pending first, then completed (though they go into separate containers anyway)
    // We filter then for each section
    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    // Update counters
    pendingCountEl.textContent = `${pendingTasks.length} Pending`;
    completedCountEl.textContent = `${completedTasks.length} Completed`;

    // Render pending tasks
    pendingTasks.forEach(task => {
        const taskEl = createTaskElement(task);
        pendingTasksContainer.appendChild(taskEl);
    });

    // Render completed tasks
    completedTasks.forEach(task => {
        const taskEl = createTaskElement(task);
        completedTasksContainer.appendChild(taskEl);
    });

    // Save to LocalStorage after every render
    saveTasks();
}

// Function to create a task DOM element
function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = `task-item ${task.completed ? 'completed' : ''}`;
    div.dataset.id = task.id;

    div.innerHTML = `
        <div class="task-content">${task.description}</div>
        <div class="task-actions">
            <button class="action-btn ${task.completed ? 'uncomplete-btn' : 'complete-btn'}" onclick="toggleTaskStatus(${task.id})">
                ${task.completed ? '↩' : '✓'}
            </button>
            <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">
                ✕
            </button>
        </div>
    `;

    return div;
}

// Add New Task
function addTask() {
    const description = taskInput.value.trim();
    
    // Edge case: Reject empty input
    if (!description) {
        taskInput.classList.add('error');
        setTimeout(() => taskInput.classList.remove('error'), 400);
        return;
    }

    const newTask = {
        id: Date.now(), // Unique ID based on timestamp
        description: description,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Toggle Complete/Uncomplete
function toggleTaskStatus(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

// Clear All Completed
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

// LocalStorage Persistence
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearCompletedBtn.addEventListener('click', clearCompleted);

// Initial Render
renderTasks();
