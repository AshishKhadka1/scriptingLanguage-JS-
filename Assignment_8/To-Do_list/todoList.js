// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('taskList');

        // Create new task item
        var taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Add click event to mark as completed
        taskItem.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        // Create delete button for the task
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add click event to delete the task
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        // Append delete button to task item
        taskItem.appendChild(deleteButton);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }
}
