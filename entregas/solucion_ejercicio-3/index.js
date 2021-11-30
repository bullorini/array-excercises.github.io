// Crear un array de nombre "lenguajes" que contenga los siguientes strings: "PHP", "JavaScript", "Java", "C" y "Python".
// A partir del mismo, recrear con JS el contenido del div con id "lenguajes-container" para que su contenido quede idéntico al del ejercicio anterior. Verificar en las Dev Tools del navegador que el HTML quede armado correctamente antes de continuar.
// // Por último, adicionar el comportamiento del ejercicio anterior, de tal modo que estas anclas (recién creadas con JS) funcionen correctamente.

{/* <div id="lenguajes-container">
<ul>
    <li><a href="#php">PHP</a></li>
    <li><a href="#javascript">JavaScript</a></li>
    <li><a href="#java">Java</a></li>
    <li><a href="#c">C</a></li>
    <li><a href="#python">Python</a></li>
</ul>
</div> */}
var lenguajes = [ "PHP", "JavaScript", "Java", "C" , "Python"];
var newDiv = document.createElement('div');
newDiv.id = 'lenguajes-container'
var newUl = document.createElement('ul');
var newLi= document.createElement('li');
newDiv.appendChild(newUl);
newUl.appendChild(newLi);

var allh2= document.querySelectorAll('h2');
for (var i = 0; i < allh2.length; i+=1){
    var newA = document.createElement('a');
    newA.href = lenguajes[i];
    newLi.appendChild(newA);
    console.log(newA);
    if(i>=1 && i <= 4){
        if(allh2[i].innerHTML = lenguajes[i]){
            allh2[i].id = lenguajes[i];
            console.log(allh2);
        } 
    }
} 
