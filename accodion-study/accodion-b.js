const question = document.querySelectorAll(".question");
const header = document.querySelectorAll(".header");
const body = document.querySelectorAll(".body");
let bodyHeight = 0;

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function (ev) {
    // 적힌 순서 중요. 다 뺀 다음 추가.
    removeActive();
    this.parentNode.classList.toggle("active");
  });
}

// active 전부 빼기.
function removeActive() {
  for (let j = 0; j < question.length; j++) {
    question[j].classList.remove("active");
  }
}
