const form = document.querySelector("form");
const span = document.querySelector("span");
const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");
form.addEventListener("submit", addTask);
// add task
function addTask() {
      if (input.value == "") {
            alert("add task");
      }
      const li = document.createElement("li");
      const i = document.createElement("i");
      i.className = "fas fa-times";
      li.appendChild(document.createTextNode(input.value));
      li.appendChild(i);
      ul.appendChild(li);
      input.value = "";
      ul.addEventListener("click", remove);
      // remove task
      function remove(e) {
            if (e.target.parentElement == li) {
                  if (confirm(
                              "Do you want to delete this item?"
                        ) == true) {
                        e.target.parentElement.remove();
                  }
            }
      }
};
span.addEventListener("click", () => {
      if (confirm("Do you want to delete all of the items?") == true) {
            ul.innerHTML = "";
      }
});