function addingEventListener() {
    let btn = document.getElementById('button')
    btn.addEventListener('click',clickAlert)
}
function clickAlert() {
    alert('I was clicked!');
}
