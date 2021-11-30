var buttonsContainer = document.getElementsByClassName("card-btn__container");

for (var id = 0; id < buttonsContainer.length; id++) {
  console.log("Recorriendo btn__container " + id);
  // change text button with effects

  var oldBtn = buttonsContainer.item(id).children[0];
  var oldBtnText = oldBtn.children[0];
  renameButton(oldBtnText, "Conocer más...");
  // add cart button
  cloneButton(id, oldBtn);
  // add alert
  var card_text = document.getElementsByClassName("card-text");
  addAlert(id, card_text[id]);

  // modify cloned button to add to cart
  let clonedButton = buttonsContainer.item(id).children[1].children[0];
  setElement(id, clonedButton, "btn btn-js", "Agregar al carrito");
}
function addAlert(id, obj) {
  let purchase_alert = document.createElement("div");
  setElement(id, purchase_alert, "purchase-alert", "Aún no comprado");
  obj.appendChild(purchase_alert);
}
function addToCart(id, obj) {
  obj.dataset.quantity++;
  document.getElementsByClassName("purchase-alert")[id].innerHTML = "Se compró " + obj.dataset.quantity + " vez.";
}
function cloneButton(id, oldBtn) {
  let clonedButton = oldBtn.cloneNode(true);
  let btnContainer = document.getElementsByClassName("card-btn__container")[id];
  btnContainer.appendChild(clonedButton);
}
function setElement(id, obj, newClass, string) {

    obj.className = newClass;
  if (obj.className.includes(newClass)) {
      //console.log("El botón ya tiene la clase " + newClass);
    renameButton(obj, string);
  }else{
      obj.innerHTML = string;
  }
  obj.dataset.productId = id;
  obj.dataset.quantity = 0;
}
function renameButton(obj, string) {
  let stringHTML =
    `
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    ` + string;

  obj.innerHTML = stringHTML;
}

document.querySelectorAll(".btn-js").forEach((item, id) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    addToCart(id, item);
  });
});
