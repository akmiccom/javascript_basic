document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput")
    const addTaskBtn = document.getElementById("addTaskBtn")
    const taskList = document.getElementById("taskList")

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("#taskList li").forEach(li => {
            tasks.push(li.firstChild.textContent.trim())
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask(taskText) {
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;

        li.querySelector(".deleteBtn").addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
        taskInput.value = "";
        saveTasks();
    };

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.forEach(addTask);
    };

    addTaskBtn.addEventListener("click", () => addTask(taskInput.value.trim()));
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask(taskInput.value.trim());
    });

    loadTasks();

})