// creating a todo project which saves the tasks to a file

const fs = require('fs');
const filePath = "./tasks.JSON"

const loadTask = () => {
    // it can give you error hence
    try {
        const dataBuffer = fs.readFileSync(filePath); // doesn't give you a string. Gives you a dataBuffer which is another dataType.
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const listTasks = () => {
    const tasks = loadTask();
    tasks.forEach((task, index) => {
        console.log(`${index + 1} ${task.task}`);
    });
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({ task });
    saveTasks(tasks);
    console.log("task added ", task);

}


const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    addTask(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    removeTask(parseInt(argument));
} else {
    console.log("Command not found!");
}

