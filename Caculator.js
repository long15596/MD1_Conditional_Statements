function display(value) {
    let display = document.getElementById('display').value += value;
}
function result() {
    let a = document.getElementById('display').value;
    let b = eval(a);
    document.getElementById('display').value = b;
}

function clr() {
    document.getElementById('display').value = "";
}