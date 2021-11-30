
var allAnchors= document.querySelectorAll('a');
for (var i = 0; i < allAnchors.length; i+=1){
    var anchor = allAnchors[i];
    var href = anchor.href;
    var newId = href.split('#');
    var allh2 = document.querySelectorAll('h2');
    var lang = newId[1];
    if(allh2[i].innerHTML = lang){
        allh2[i].id=lang;
    } 
}
