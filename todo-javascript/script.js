document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".submit-form");
  const input = document.querySelector(".task-input");
  const button = document.querySelector(".btn");
  const list = document.querySelector(".list");

  let isEdit = false;
  let editItem = null;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoItem = input.value.trim();

    if (isEdit) {
      console.log(editItem.firstChild, todoItem);
      editItem.firstChild.textContent = todoItem;
      editItem = null;
      isEdit = false;
      button.innerText = "Add";
    } else {
      const li = document.createElement("li");
      const edit = document.createElement("button");
      edit.textContent = "Edit";
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      li.insertAdjacentHTML("afterbegin", `<span>${todoItem}</span>`);
      li.appendChild(edit);
      li.appendChild(deleteBtn);

      list.appendChild(li);
    }
  });

  list.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      if (target.innerText === "Delete") {
        target.parentNode.remove();
      } else {
        // Edit Todo
        isEdit = true;
        editItem = target.parentNode;
        input.value = target.parentNode.firstChild.innerText;
        input.focus();
        button.innerText = "Edit";
      }
    }
  });
});
