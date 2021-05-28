
const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', shake)
}

function shake(event) {
    event.target.classList.toggle('shake')    
}