
const containerBody = document.querySelector("body");

const contentRed = document.createElement("p");
contentRed.classList.add("content");
contentRed.textContent = "hey i'm red !";
contentRed.style.color = "red";
containerBody.appendChild(contentRed);


const contentBlue = document.createElement("h3");
contentBlue.classList.add("content");
contentBlue.textContent = "i'm a blue h3 !";
contentBlue.style.color = "blue";
containerBody.appendChild(contentBlue);

// container div
const div = document.createElement("div");
div.style.cssText = "border: 3px solid black; background-color: pink";

const divHeader = document.createElement("h1");
divHeader.classList.add("content");
divHeader.textContent = "i'm in a div";

const divP = document.createElement("p");
divP.classList.add("content");
divP.textContent = "ME TOO !!!";

div.appendChild(divHeader);
div.appendChild(divP);

containerBody.appendChild(div);

// button method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("hey guys what's up");

// button method 3
const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("just kidding i hate you");
// })

btn.addEventListener("click", function (e) {
  console.log(e);
});


// with function
// function alertFunction() {
//     alert("yaaaay");
// }

// method 2
// btn.onclick = alertFunction;

// method 3
// btn.addEventListener("click", alertFunction);