var divContainer = document.getElementsByClassName('card-btn');

for (var i = 0; i < divContainer.length; i++) {
    console.log("cambiando elementos "+ i)
    let stringHTML = `
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Conocer más...
    ` 
    // change text button with effects
    btn = divContainer[i].children[0];
    console.log(btn);
    btn.innerHTML = stringHTML;

    // add cart button
    const newBtn = document.createElement('button');
    newBtn.className = 'btn-js';
    newBtn.innerHTML = 'Agregar carrito';
    document.getElementsByClassName('card-btn__container')[i].appendChild(newBtn);
}
var card_text = document.getElementsByClassName('card-text');
    for ( text of card_text ) {
        var purchase_alert = document.createElement('div');
        text.appendChild(purchase_alert);
        purchase_alert.className = 'purchase-alert';
        purchase_alert.innerHTML = 'Aún no comprado';
    }

const add_to_cart = document.getElementsByClassName('btn-js');

for ( btn of add_to_cart ) {
    var cart_count = 0;
    let card_id = add_to_cart.length;
    console.log(card_id);
    btn.addEventListener('click', function() {
        let alerts = document.getElementsByClassName('purchase-alert');
        cart_count++;
        for ( alert of alerts) {
            console.log(cart_count);
            alert.innerHTML = 'Se compró ' + cart_count + ' vez.';
        }
    });
}