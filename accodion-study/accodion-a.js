const question = document.querySelectorAll(".question");
const btn = document.querySelector("#btn");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

btn.addEventListener("click", function () {
  for (let j = 0; j < question.length; j++) {
    question[j].classList.remove("active");
  }
});
