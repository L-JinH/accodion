/*
1. CSS
1-1. panel-body의 display: none을 준다.
1-2. .active의 자식요소 .panel-body에 display: block;을 준다.
    : (.panel-question).active .panel-body 
*/

/*
2. .panel-question을 click할 때 .active 전부 빼고 click한 곳만 .active 추가 하기.
2-1. .panel-question(panelQuestion)와 #btn-collapse(collapseBtn)를 변수로 가져오기.
2-2. panelQuestion을 for문으로 click이벤트를 추가함.
2-3. click하면 할 일: closeAll(); 추가, 이벤트가 일어난 곳에 .active 추가.
*/

let panelQuestion = document.querySelectorAll(".panel-question");
let collapseBtn = document.querySelector("#btn-collapse");

for (let i = 0; i < panelQuestion.length; i++) {
  panelQuestion[i].addEventListener("click", function () {
    closeAll();
    this.classList.add("active");
  });
}

/*
3. btn을 click하면 .active가 빠지고 전부 접음.
*/

collapseBtn.addEventListener("click", function () {
  closeAll();
});

/*
4. .panel-question(panelQuestion)의 .active를 제거.
*/

function closeAll() {
  for (let z = 0; z < panelQuestion.length; z++) {
    panelQuestion[z].classList.remove("active");
  }
}
