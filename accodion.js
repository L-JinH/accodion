// querySelectorAll도 가능.
const btnCollapse = document.getElementById("btn-collapse");
const heading = document.getElementsByClassName("panel-heading");
const question = document.getElementsByClassName("panel-question");
const answer = document.getElementsByClassName("panel-body");

/* 
1. headig을 click하면 question의 .active를 다 뺀다.
2. 그리고 click한 qustion에만 .active를 추가한다.
2-2. click한 qustion을 알기 위해서 target을 사용.
  *target은 매개변수(ev)가 필요하다. function(ev){}
    ev.target = event가 일어난 것.
*/

// 1, 2번
for (let i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function (ev) {
    for (let j = 0; j < question.length; j++) {
      question[j].classList.remove("active");
      ev.target.parentNode.classList.add("active");
      activateBody();
    }
  });
}

/*
3. 함수 activateBody();를 추가하기. : activateBody();가 할 일.
3-1. answer이 다 안보이게 하기.
3-2. active가 있는 question의 answer을 보이게 하기.
3-3. .active가 있는 자식요소 선택
  : let activePanel = document.querySelector(".panel-question.active .panel-body");
*/

// 3번
function activateBody() {
  for (let x = 0; x < answer.length; x++) {
    // 3-2
    answer[x].style.display = "none";
  }
  // 3-4
  let activePanel = document.querySelector(
    ".panel-question.active .panel-body"
  );
  // 3-3
  activePanel.style.display = "block";
}

// 이 함수는 클릭해서도 작동하지만 열자마자도 작동함.
activateBody();

/*
4. btn을 누르면 전부 접기.
*/

btnCollapse.addEventListener("click", function () {
  for (let z = 0; z < answer.length; z++) {
    answer[z].style.display = "none";
  }
});
