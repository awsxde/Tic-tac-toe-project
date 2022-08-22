let count = 0;
let turn = true;
let btn = document.querySelectorAll(".btn");
let arr = Array.from({ length: btn.length }, (_, i) => (i = "empty"));
let clicked = Array.from({ length: btn.length }, (_, i) => (i = false));

function assign(j, z) {
  btn[j].innerHTML = `${z}`;
  turn = !turn;
  clicked[j] = true;
  arr[j] = btn[j].innerHTML;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    clicked[i] && count--;
    !clicked[i] && assign(i, turn ? "X" : "O");
    check();
  });
}

function win(name) {
  document.querySelector("p").textContent = `${name} wins!`;
  document.querySelector("body").style.background = "lightgreen";
  window.scrollTo(0, 0);
}

function tie() {
  document.querySelector("p").textContent = `tied!`;
  document.querySelector("body").style.background = "grey";
  window.scrollTo(0, 0);
}

function logic(a, b, c, array) {
  return (
    array[a] === array[b] &&
    array[b] === array[c] &&
    ["X", "O"].includes(array[a])
  );
}

function check() {
  logic(0, 1, 2, arr)
    ? win(`${arr[0]}`)
    : logic(3, 4, 5, arr)
    ? win(`${arr[3]}`)
    : logic(6, 7, 8, arr)
    ? win(`${arr[6]}`)
    : logic(0, 3, 6, arr)
    ? win(`${arr[0]}`)
    : logic(1, 4, 7, arr)
    ? win(`${arr[1]}`)
    : logic(2, 5, 8, arr)
    ? win(`${arr[2]}`)
    : logic(0, 4, 8, arr)
    ? win(`${arr[0]}`)
    : logic(2, 4, 6, arr)
    ? win(`${arr[2]}`)
    : count === 8
    ? tie()
    : count++;
}
