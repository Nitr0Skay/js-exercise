const productNameInputElement = document.getElementById('product-name');

function updateRemainingCharacters(event) {
    const remainingCharsElement = document.getElementById('remaining-chars');
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const maxLength = event.target.maxLength;
    const remainingCharacters = maxLength - enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters;

    if(remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if(remainingCharacters <= 10){
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    } else {
        remainingCharsElement.classList.remove('error', 'warning');
        productNameInputElement.classList.remove('error', 'warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);