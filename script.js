let btn = document.querySelector("#addTaskButton");
let ul = document.querySelector("#taskList");
let inp = document.querySelector("#taskInput");
let deleteBtn = document.querySelector(".delete");

btn.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let item = document.createElement("li");
        item.innerText = inp.value;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");

        item.appendChild(deleteBtn);
        ul.appendChild(item);
        inp.value = "";
    }

});


// Detecting the click event on the delete button
ul.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON") {
        let par = e.target.parentElement;
        par.remove();
    }
    console.log("delete button clicked");
    console.log(e.target);
});