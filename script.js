//elements
// let message = document.querySelector("p");
// let body = document.querySelector("body");
// let btn = document.querySelectorAll("button");

//variables
// let side;
// let n = 0;
// let num = Array.from({ length: 9 }, (_, i) => i);

//functions
// //two players
// function btnHandler() {
//   if (i.classList.contains("empty") && !isOver()) {
//     side = ["x", "o"][num[n++] % 2];
//     i.textContent = side;
//     i.classList.remove("empty");
//     check();
//   }
// }

// function isOver() {
//   return document.querySelectorAll(".empty").length === 0;
// }

// function winCheck(...array) {
//   return ["xxx", "ooo"].includes(
//     array.reduce((a, b) => a + btn[b].textContent, "")
//   );
// }

// function end(x) {
//   message.textContent = x === "tie" ? "tied" : `${side} won`;
//   body.style.background = x === "tie" ? "white" : "lightgreen";
//   btn.forEach((i) => i.classList.remove("empty"));
//   // window.scrollTo(0, 0);
// }

// function check() {
//   [
//     winCheck(0, 1, 2),
//     winCheck(3, 4, 5),
//     winCheck(6, 7, 8),
//     winCheck(0, 3, 6),
//     winCheck(1, 4, 7),
//     winCheck(2, 5, 8),
//     winCheck(0, 4, 8),
//     winCheck(2, 4, 6),
//   ].some((i) => i === true)
//     ? end("win")
//     : isOver() && end("tie");
// }

// btn.forEach((i) => i.addEventListener("click", btnHandler));

// //one player
let message = document.querySelector("p");
let body = document.querySelector("body");
let btn = document.querySelectorAll("button");

function btnHandler(i) {
  if (i.classList.contains("empty") && !isOver()) {
    i.textContent = "x";
    i.classList.remove("empty");
    check();
    if (!isOver()) {
      robot();
      check();
    }
  }
}

function getEmpty() {
  return document.querySelectorAll(".empty");
}

function isOver() {
  return getEmpty().length === 0;
}

function winCheck(...array) {
  return ["xxx", "ooo"].includes(
    array.reduce((a, b) => a + btn[b].textContent, "")
  );
}

function end(x) {
  message.textContent = x === "tie" ? "tied" : `m won`;
  body.style.background = x === "tie" ? "tomato" : "lightgreen";
  btn.forEach((i) => i.classList.remove("empty"));
}

function robot() {
  let emptyBtn = getEmpty();
  let choice = emptyBtn[Math.floor(Math.random() * emptyBtn.length)];
  choice.textContent = "o";
  choice.classList.remove("empty");
}

function check() {
  [
    winCheck(0, 1, 2),
    winCheck(3, 4, 5),
    winCheck(6, 7, 8),
    winCheck(0, 3, 6),
    winCheck(1, 4, 7),
    winCheck(2, 5, 8),
    winCheck(0, 4, 8),
    winCheck(2, 4, 6),
  ].some((i) => i === true)
    ? end("win")
    : isOver() && end("tie");
}

btn.forEach((i) => i.addEventListener("click", () => btnHandler(i)));
