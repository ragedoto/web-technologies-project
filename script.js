function readMore() {
  const more = document.getElementById("more");
  const btn = document.getElementById("btn");

  if (more.style.display === "inline") {
    btn.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    btn.innerHTML = "Close";
    more.style.display = "inline";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ageForm").onsubmit = function (e) {
    e.preventDefault();

    const age = document.getElementById("age").value.trim();
    const errorBox = document.getElementById("formError");

    if (age === "") return errorBox.textContent = "Age is required.";
    if (isNaN(age)) return errorBox.textContent = "Age must be a number.";
    if (age < 1 || age > 120) return errorBox.textContent = "Age must be between 1 and 120.";

    errorBox.textContent = "";
    this.submit();
  };
});


