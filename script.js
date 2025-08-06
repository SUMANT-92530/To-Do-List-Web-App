const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const btn = document.createElement('button');
    btn.textContent = '✔';

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.insertAdjacentElement("afterbegin",btn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
