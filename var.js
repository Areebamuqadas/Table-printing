
let btn = document.getElementById('btn');
btn.addEventListener('click',Table);

function Table(e) {
    var imp = document.getElementById('imp');
    var num = imp.value; 
    imp.value = ""; 

    var ul = document.getElementById('ou-ul');
    ul.innerHTML = ""; // Clear any existing table content

    for (var i = 1; i <= 10; i++) {
        var tab = num * i;
        var list = document.createElement('li');
        list.textContent = num + " * " + i + " = " + tab;
        ul.appendChild(list);
    }
}


// clear
let btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', clearText);

function clearText(event) {
    var bt = event.currentTarget;
    var li = bt.previousElementSibling;
    li.textContent = " ";
}

