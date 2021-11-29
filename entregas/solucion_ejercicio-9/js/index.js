var buttonsContainer = document.getElementsByClassName('card-btn__container');

for (var id = 0; id < buttonsContainer.length; id++) {
    console.log("cambiando elementos "+ id)
    // change text button with effects
    var btn = document.querySelectorAll('.card-btn a')[id];
    //console.log(btn);
    renameButton(btn,'Conocer más...');
    var oldBtn = buttonsContainer.item(id).children[0];
    // add cart button
    cloneButton(id, oldBtn);
    // add alert
    var card_text = document.getElementsByClassName('card-text');
    addAlert(id, card_text[id]);
}
function renameButton(obj, string){
    let stringHTML = `
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    `+ string;

    obj.innerHTML = stringHTML;
}
function cloneButton(id,oldBtn){
    let newBtn = oldBtn.cloneNode(true);
    document.getElementsByClassName('card-btn__container')[id].appendChild(newBtn);
    newBtn = document.querySelectorAll('.card-btn__container .card-btn')[id].childNodes[1];
    console.log(newBtn);
    // setElement(id, newBtn, 'btn-js','Agregar carrito');
}
function setElement(id, obj, newClass, string){
    obj.className = newClass;
    obj.dataset.productId = id;
    obj.dataset.quantity = 0;
    if (newClass = 'btn-js'){
        obj.innerHTML = string;
        renameButton(obj, string);
    }else{
        obj.innerHTML = string;
    }
};
function addAlert (id, obj){
    let purchase_alert = document.createElement('div');
    setElement(id, purchase_alert, 'purchase-alert','Aún no comprado');
    obj.appendChild(purchase_alert);
}
function addToCart(id, obj){
    obj.dataset.quantity++;
    document.getElementsByClassName('purchase-alert')[id].innerHTML = 'Se compró ' + obj.dataset.quantity + ' vez.';
}
document.querySelectorAll('.btn-js').forEach((item, id) => {
    item.addEventListener('click', event => {
        addToCart(id, item);
    })
  });

// function addToCart (obj,index){
// console.log(index);

// };
