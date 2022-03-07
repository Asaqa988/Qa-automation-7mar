function getOption(){
    var select = document.getElementById("dynamic-select");
    if(select.options.length > 0) {
        var option = select.options[select.selectedIndex];
        alert("Text: " + option.text + "\nValue: " + option.value);
    } else {
        window.alert("Select box is empty");
    }
}

function addOption(){
    var select = document.getElementById("dynamic-select");
    select.options[select.options.length] = new Option('New Element', '0', false, false);
}

function removeOption(){
    var select = document.getElementById("dynamic-select");
    select.options[select.selectedIndex] = null;
}

function removeAllOptions(){
    var select = document.getElementById("dynamic-select");
    select.options.length = 0;
}