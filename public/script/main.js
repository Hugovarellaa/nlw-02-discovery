const button = document.querySelector("button#add-time");

button.addEventListener("click", cloneField);

function cloneField() {
  const field = document.querySelector(".schedule-item").cloneNode(true);

  const clearField = field.querySelectorAll("input");

  clearField.forEach((item) => {
    item.value = "";
  });

  document.querySelector("#schedule-items").appendChild(field);
}
