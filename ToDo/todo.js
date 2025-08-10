// Import the built-in 'fs' module to handle file operations
const fs = require("fs");

// Path to the file where tasks will be stored (fixed typo from '.jon' to '.json')
const filePath = "./tasks.json";

// Function to load tasks from the file
const loadTask = () => {
  try {
    // Read data from file
    const dataBuffer = fs.readFileSync(filePath);
    // Convert buffer to string
    const dataJSON = dataBuffer.toString();
    // Parse JSON string into JavaScript array
    return JSON.parse(dataJSON);
  } catch (error) {
    // If file doesn't exist or has error, return empty task list
    return [];
  }
};

// Function to save tasks to the file
const saveTasks = (tasks) => {
  // Convert tasks array to JSON string
  const dataJSON = JSON.stringify(tasks);
  // Write the string to file
  fs.writeFileSync(filePath, dataJSON);
};

// Function to add a new task
const addTask = (task) => {
  const tasks = loadTask();         // Load existing tasks
  tasks.push({ task });             // Add new task as object: { task: "some task" }
  saveTasks(tasks);                 // Save updated task list
  console.log("Task added:", task);
};

// Function to list all tasks
const listTasks = () => {
  const tasks = loadTask();         // Load tasks
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Your tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.task}`);
    });
  }
};

// Function to remove a task by index
const removeTask = (index) => {
  const tasks = loadTask();         // ✅ Fixed typo: was loadTasks()

  // Check if the given index is valid
  if (index >= 1 && index <= tasks.length) {
    tasks.splice(index - 1, 1);     // Remove the task (adjusted for zero-based index)
    saveTasks(tasks);               // Save updated list
    console.log(`Task ${index} removed.`);
  } else {
    console.log("Invalid task index.");
  }
};

// Get command line arguments (e.g., "add", "list", "remove")
const command = process.argv[2];       // e.g., 'add'
const argument = process.argv[3];      // e.g., 'Buy milk'

// Handle commands
if (command === "add") {
  if (argument) {
    addTask(argument);
  } else {
    console.log("Please provide a task to add.");
  }
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  if (!isNaN(argument)) {
    removeTask(parseInt(argument));
  } else {
    console.log("Please provide a valid task number to remove.");
  }
} else {
  console.log("Command not found! Use 'add', 'list', or 'remove'.");
}
