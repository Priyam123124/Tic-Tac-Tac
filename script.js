let a1 = document.getElementById("id1");
let a2 = document.getElementById("id2");
let a3 = document.getElementById("id3");
let a4 = document.getElementById("id11");
let a5 = document.getElementById("id22");
let a6 = document.getElementById("id33");
let a7 = document.getElementById("id111");
let a8 = document.getElementById("id222");
let a9 = document.getElementById("id333");
let score = document.getElementById("score");
let score1 = document.getElementById("score1")

let p1 = a1.innerHTML = "";
let p2 = a2.innerHTML = "";
let p3 = a3.innerHTML = "";
let p4 = a4.innerHTML = "";
let p5 = a5.innerHTML = "";
let p6 = a6.innerHTML = "";
let p7 = a7.innerHTML = "";
let p8 = a8.innerHTML = "";
let p9 = a9.innerHTML = "";
let p = 0;

let Score_0 = 0;
let Score_X = 0;

function updatescore() {
  if ((a1.innerHTML == "X" && a2.innerHTML == "X" && a3.innerHTML == "X") || (a4.innerHTML == "X" && a5.innerHTML == "X" && a6.innerHTML == "X") || (a7.innerHTML == "X" && a8.innerHTML == "X" && a9.innerHTML == "X") || (a1.innerHTML == "X" && a4.innerHTML == "X" && a7.innerHTML == "X") || (a2.innerHTML == "X" && a5.innerHTML == "X" && a8.innerHTML == "X") || (a3.innerHTML == "X" && a6.innerHTML == "X" && a9.innerHTML == "X") || (a1.innerHTML == "X" && a5.innerHTML == "X" && a9.innerHTML == "X") || (a3.innerHTML == "X" && a5.innerHTML == "X" && a7.innerHTML == "X")) {
    p = 0;
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    a4.innerHTML = "";
    a5.innerHTML = "";
    a6.innerHTML = "";
    a7.innerHTML = "";
    a8.innerHTML = "";
    a9.innerHTML = "";
    Score_X += 1;
    score1.innerHTML = `<p>Score_X = ${Score_X}</p>`
  } else if ((a1.innerHTML == "0" && a2.innerHTML == "0" && a3.innerHTML == "0") || (a4.innerHTML == "0" && a5.innerHTML == "0" && a6.innerHTML == "0") || (a7.innerHTML == "0" && a8.innerHTML == "0" && a9.innerHTML == "0") || (a1.innerHTML == "0" && a4.innerHTML == "0" && a7.innerHTML == "0") || (a2.innerHTML == "0" && a5.innerHTML == "0" && a8.innerHTML == "0") || (a3.innerHTML == "0" && a6.innerHTML == "0" && a9.innerHTML == "0") || (a1.innerHTML == "0" && a5.innerHTML == "0" && a9.innerHTML == "0") || (a3.innerHTML == "0" && a5.innerHTML == "0" && a7.innerHTML == "0")) {
    p = 0;
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    a4.innerHTML = "";
    a5.innerHTML = "";
    a6.innerHTML = "";
    a7.innerHTML = "";
    a8.innerHTML = "";
    a9.innerHTML = "";
    Score_0 += 1;
    console.log("Score_0" + Score_0);
    score.innerHTML = `<p>Score_0 = ${Score_0}</p>`
  } else if (p == 9) {
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    a4.innerHTML = "";
    a5.innerHTML = "";
    a6.innerHTML = "";
    a7.innerHTML = "";
    a8.innerHTML = "";
    a9.innerHTML = "";
    p = 0;
  }
}

a1.addEventListener("click", () => {
  if(a1.innerHTML == "") {
  p += 1;

  if (p % 2 == 0) {
    a1.style.color = "green"
    a1.innerHTML = "X"
  } else {
    a1.style.color = "red"
    a1.innerHTML = "0"
  }
  }
  updatescore();
})
a2.addEventListener("click", () => {
  if(a2.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a2.style.color = "green"
    a2.innerHTML = "X"
  } else {
    a2.style.color = "red"
    a2.innerHTML = "0"
  }
  }
  updatescore();
})
a3.addEventListener("click", () => {
  if(a3.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a3.innerHTML = "X"
    a3.style.color = "green"
  } else {
    a3.style.color = "red"
    a3.innerHTML = "0"
  }
  }
  updatescore();
})
a4.addEventListener("click", () => {
  if(a4.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a4.style.color = "green"
    a4.innerHTML = "X"
  } else {
    a4.style.color = "red"
    a4.innerHTML = "0"
  }
  }
  updatescore();
})
a5.addEventListener("click", () => {
  if(a5.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a5.style.color = "green"
    a5.innerHTML = "X"
  } else {
    a5.style.color = "red"
    a5.innerHTML = "0"
  }
  }
  updatescore();
})
a6.addEventListener("click", () => {
  if(a6.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a6.style.color = "green"
    a6.innerHTML = "X"
  } else {
    a6.style.color = "red"
    a6.innerHTML = "0"
  }
  }
  updatescore();
})
a7.addEventListener("click", () => {
  if(a7.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a7.style.color = "green"
    a7.innerHTML = "X"
  } else {
    a7.style.color = "red"
    a7.innerHTML = "0"
  }
  }
  updatescore();
})
a8.addEventListener("click", () => {
  if(a8.innerHTML == ""){
  p += 1;

  if (p % 2 == 0) {
    a8.style.color = "green"
    a8.innerHTML = "X"
  } else {
    a8.style.color = "red"
    a8.innerHTML = "0"
  }
  }
  updatescore();
})
a9.addEventListener("click", () => {
  if(a9.innerHTML == "") {
  p += 1;

  if (p % 2 == 0) {
    a9.style.color = "green"
    a9.innerHTML = "X"
  } else {
    a9.style.color = "red"
    a9.innerHTML = "0"
  }
  }
  updatescore();
})