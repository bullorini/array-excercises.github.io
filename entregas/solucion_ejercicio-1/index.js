
var allbuttons = document.querySelectorAll('a');
for (var i = 0; i < allbuttons.length; i+=1){
    var button = allbuttons[i];
    var title = button.title;
    var href = button.href;
    var newText = title + ' en ' + '(' + href + ')';
    allbuttons[i].innerHTML = newText;
    allbuttons[i].target = '_blank'
}