// First example: Sum nubers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;
    const outputResultElement = document.getElementById('calculated-sum');

    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i; 
    }
    
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

//  Highlight links

const highlightLinksButtonElement = document.querySelector('#highlight-links button');
const buttonElementText = highlightLinksButtonElement.textContent;

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');
    console.log(buttonElementText)
    for(anchorElement of anchorElements) {
        anchorElement.classList.toggle('highlight');
    }

    if(anchorElements[0].className) {
        this.textContent = 'Disable Highlight for all links';
    } else {
        this.textContent = buttonElementText;
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);