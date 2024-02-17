// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    
    // Create a checkbox for task completion
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = function() {
        if (checkBox.checked) {
            taskItem.classList.add("completed");
        } else {
            taskItem.classList.remove("completed");
        }
    };

    // Create a label for the task text
    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;
    
    // Append checkbox and label to task item
    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskLabel);
    
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
}

// Function to delete completed tasks
function deleteTasks() {
    var taskList = document.getElementById("taskList");
    var deletedTaskList = document.getElementById("deletedTaskList");
    var completedTasks = taskList.getElementsByClassName("completed");
    
    // Move completed tasks to the deleted task list
    while (completedTasks.length > 0) {
        var deletedTaskItem = document.createElement("li");
        deletedTaskItem.textContent = completedTasks[0].querySelector("label").textContent;
        deletedTaskList.appendChild(deletedTaskItem);
        completedTasks[0].remove();
    }
}
