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

// Display user data

const dummyUserData = {
    firstName: 'Max',
    lastName: 'Shwarzmuller',
    age: 32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = '';
    for(const key in dummyUserData) {
        const newUserDataListItem = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItem.textContent = outputText;
        outputDataElement.append(newUserDataListItem);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

//  Statistics  /  Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor((Math.random() * 6)) + 1;
}

function deriveNumberOfDiveRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElements = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    
    let hasRolledTargetNumber = false;
    diceRollsListElements.innerHTML = '';
    let = numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElements.append(newRollListElement);
        // if(rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiveRolls);