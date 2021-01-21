var button = document.querySelector("#add-time");

button.addEventListener("click", cloneField);

function cloneField() {
  const fields = document.querySelector(".schedule-item").cloneNode(true);

  let field = fields.querySelectorAll("input");

  field.forEach((index) => {
    index.value = "";
  });

  document.querySelector("#schedule-items").appendChild(fields);
}
