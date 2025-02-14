let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked !';
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');
function retriveUserInput(event) {
    console.log(event.target.value.length);
}

inputElement.addEventListener('input', retriveUserInput);