const productNameInputElement = document.getElementById('product-name');

function updateRemainingCharacters(event) {
    const remainingCharsElement = document.getElementById('remaining-chars');
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const maxLength = event.target.maxLength;
    const remainingCharacters = maxLength - enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters;

    if(remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
    } else {
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);