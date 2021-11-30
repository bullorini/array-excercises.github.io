var lenguajes = ["PHP", "JavaScript", "Java", "C", "Python"];
var listDiv = document.getElementById("lenguajes-container");
var newUl = document.createElement("ul");

var allh2 = document.querySelectorAll("body > h2");
for (var i = 0; i < allh2.length; i += 1) {
  if ((allh2[i].innerHTML = lenguajes[i])) {
    var newLi = document.createElement("li");
    var newA = document.createElement("a");
    newA.href = "#" + lenguajes[i];
    newA.innerHTML = lenguajes[i];
    newLi.appendChild(newA);
    newUl.appendChild(newLi);
    allh2[i].id = lenguajes[i];
    console.log(allh2);
  }
}
listDiv.appendChild(newUl);
