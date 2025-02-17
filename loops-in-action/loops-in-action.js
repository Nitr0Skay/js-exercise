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

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(link of anchorElements) {
        link.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);