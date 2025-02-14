const productNameInputElement = document.getElementById('product-name');

function updateRemainingCharacters(event) {
    const remainingCharsElement = document.getElementById('remaining-chars');
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const maxLength = event.target.maxLength;
    const remainingCharacters = maxLength - enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);